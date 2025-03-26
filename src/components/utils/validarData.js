export const validarData = ({ dia, mes, ano }) => {
    const hoje = new Date();
    const dataNascimento = new Date(ano, mes - 1, dia);
  
    if (!dia || !mes || !ano) {
      return { valido: false, mensagem: "Preencha todos os campos." };
    }
  
    if (dia < 1 || mes < 1 || ano < 1) {
      return { valido: false, mensagem: "Os valores devem ser positivos." };
    }
  
    if (dia > 31) return { valido: false, mensagem: "Dia inválido." };
    if (mes > 12) return { valido: false, mensagem: "Mês inválido." };
  
    if (ano > hoje.getFullYear()) {
      return { valido: false, mensagem: "O ano não pode estar no futuro." };
    }
  
    if (
      dataNascimento.getDate() !== dia ||
      dataNascimento.getMonth() + 1 !== mes ||
      dataNascimento.getFullYear() !== ano
    ) {
      return { valido: false, mensagem: "Data inválida." };
    }
  
    return { valido: true, mensagem: "" };
  };
  