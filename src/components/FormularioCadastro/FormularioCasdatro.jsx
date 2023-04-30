import React, {useState} from "react";
import { TextField, Button, Switch, FormControlLabel }  from "@mui/material/";

function FormularioCadastro({aoEnviar, validarCPF}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocao] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

     return(
        <form onSubmit={(evento) => {
            evento.preventDefault()
            aoEnviar({nome, cpf, sobrenome, promocoes, novidades})
        }} >
          <TextField 
            value={nome}
            onChange={(evento) => {
            setNome(evento.target.value);
         }}

            id="nome" 
            label="Nome" 
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
            variant="outlined" 
            margin="normal" 
            fullWidth />

         <TextField 
            value={cpf}
            onChange={(evento) => {
             setCPF(evento.target.value);
            }}
            
            onBlur={(evento) => {
                const ehValido = validarCPF(cpf);
                setErros({cpf:ehValido})
            }}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            id="cpf" 
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

            <Button variant="contained" type="submit">Cadastrar</Button>
        </form>

     )
}

export default FormularioCadastro ;
