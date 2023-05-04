function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: false, texto: "CPF dever 11 digitos." }
    } else {
        return { valido: true, texto: "" };
    }
}

function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72) {
        return { valido: false, texto: "Senha dever ter 4 a 72 digitos" }
    } else {
        return { valido: true, texto: "" };
    }
}


export { validarCPF, validarSenha };
