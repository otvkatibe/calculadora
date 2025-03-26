import React from "react";

const Erro = ({ mensagem }) => mensagem ? <div style = {{color: "red" }}>{mensagem}</div> : null;

export default Erro;
