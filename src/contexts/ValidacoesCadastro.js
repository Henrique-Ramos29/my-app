import React from "react";

const ValidacoesCadastro = React.createContext(
    { cpf: semValidacao, senha: semValidacao, nome: semValidacao }
);

function semValidacao(dados) {
    console.log(dados)
    return { Valido: true, texto: "" }
}
export default ValidacoesCadastro;
