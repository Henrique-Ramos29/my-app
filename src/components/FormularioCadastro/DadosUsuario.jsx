import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);
    
     return (
       <form onSubmit={(evento) => {
         evento.preventDefault();
         if (possoEnviar()) {
             aoEnviar({ email, senha })
         }
       }}>
        <TextField 
            value={email}
            onChange={(evento) => {
                setEmail(evento.target.value)
            }}
            id="email" 
            label="email"
            name="email" 
            type="email" 
            required
            variant="outlined" 
            margin="normal" 
            fullWidth/>
        <TextField 
            value={senha}
            onChange={(evento) => {
                setSenha(evento.target.value)
            }}
            onBlur={validarCampos}
            error={!erros.senha.valido}
            helperText={erros.senha.texto}
            id="senha" 
            label="senha" 
            name="senha"
            type="password" 
            required
            variant="outlined" 
            margin="normal" 
            fullWidth />

        <Button 
            type="submit"
            variant="contained">Proximo</Button>
       </form>
     );
}

export default DadosUsuario;