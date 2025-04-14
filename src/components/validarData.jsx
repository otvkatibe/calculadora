export const validarData = ({ dia, mes, ano }) => {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();
  
    // Validação básica
    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
      return { valido: false, mensagem: "Preencha todos os campos." };
    }
  
    if (ano > anoAtual || (ano === anoAtual && mes > mesAtual) || (ano === anoAtual && mes === mesAtual && dia > diaAtual)) {
      return { valido: false, mensagem: "A data não pode ser no futuro." };
    }
  
    if (mes < 1 || mes > 12) {
      return { valido: false, mensagem: "Mês inválido." };
    }
  
    const ultimoDiaMes = new Date(ano, mes, 0).getDate();
    if (dia < 1 || dia > ultimoDiaMes) {
      return { valido: false, mensagem: "Dia inválido para este mês." };
    }
  
    return { valido: true, mensagem: "" };
  };

