import React, {useState, useContext} from "react";
import { TextField, Button, Switch, FormControlLabel }  from "@mui/material/";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";


function DadosPessoais({aoEnviar}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocao] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);
    const validacoes =  useContext(ValidacoesCadastro);

    
     return (
       <form onSubmit={(evento) => {
         evento.preventDefault();
         if(possoEnviar()) {
            aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
        }
        }} >
          <TextField 
            value={nome}
            onChange={(evento) => {
            setNome(evento.target.valido);
         }}
            onBlur={validarCampos}
            error={!erros.nome.valido}
            helperText={erros.nome.texto}
            id="nome" 
            label="Nome" 
            name="nome"
            variant="outlined" 
            margin="normal" 
            fullWidth />

         <TextField 
             value={sobrenome}
             onChange={(evento) => {
             setSobrenome(evento.target.value);
             }}
            id="sobrenome" 
            label="Sobrenome" 
            name="sobrenome"
            variant="outlined" 
            margin="normal" 
            fullWidth />

         <TextField 
            value={cpf}
            onChange={(evento) => {
             setCPF(evento.target.value);
            }}
            
            onBlur={validarCampos}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            id="CPF" 
            name="cpf"
            label="CPF" 
            variant="outlined" 
            margin="normal" 
            fullWidth />

         <FormControlLabel 
            label="Promoção" 
            control={<Switch 
                checked={promocoes}
                onChange={(evento) => {
                setPromocao(evento.target.checked)
            }}  name="promocoes" 
                 />} />

         <FormControlLabel 
            label="Novidades" 
            control={<Switch 
                checked={novidades}
                onChange={(evento) => {
                setNovidades(evento.target.checked)
            }} name="novidades" 
                />} />

            <Button type="submit" color="primary" variant="contained" >Proximo</Button>
        </form>

     )
}

export default DadosPessoais;
