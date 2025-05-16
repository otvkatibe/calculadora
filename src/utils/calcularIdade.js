const calcularIdade = ({ dia, mes, ano }) => {
  const hoje = new Date();
  const dataNascimento = new Date(ano, mes - 1, dia);

  let idadeAnos = hoje.getFullYear() - dataNascimento.getFullYear();
  let idadeMeses = hoje.getMonth() - dataNascimento.getMonth();
  let idadeDias = hoje.getDate() - dataNascimento.getDate();

  if (idadeMeses < 0 || (idadeMeses === 0 && idadeDias < 0)) {
    idadeAnos--;
    idadeMeses += 12;
  }

  if (idadeDias < 0) {
    const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    idadeDias += ultimoDiaMesAnterior;
    idadeMeses--;
  }

  return { anos: idadeAnos, meses: idadeMeses, dias: idadeDias };
};

export { calcularIdade };