import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function DadosEntregas({aoEnviar}) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");


    return (
      <form onSubmit={(evento) => {
        evento.preventDefault();
        aoEnviar({cep, endereco, numero, estado, cidade})
      }}>
        <TextField
            value={cep}
            onChange={(evento) => {
                setCep(evento.target.value)
            }}
            id="cep" 
            label="cep" 
            type="number" 
            variant="outlined" 
            margin="normal" 
            fullWidth/>

        <TextField
            value={endereco}
             onChange={(evento) => {
                 setEndereco(evento.target.value)
             }}
            id="endereco" 
            label="endereço" 
            type="text" 
            variant="outlined" 
            margin="normal" 
            fullWidth/>

        <TextField
            value={numero}
            onChange={(evento) => {
                setNumero(evento.target.value)
            }}
            id="numero" 
            label="numero" 
            type="number" 
            variant="outlined" 
            margin="normal" 
            fullWidth/>  

        <TextField
            value={estado}
            onChange={(evento) => {
                setEstado(evento.target.value)
            }}
            id="estado" 
            label="estado" 
            type="text" 
            variant="outlined" 
            margin="normal" 
            fullWidth/> 

        <TextField
            value={cidade}
            onChange={(evento) => {
                setCidade(evento.target.value)
            }}
            id="cidade" 
            label="cidade" 
            type="text" 
            variant="outlined" 
            margin="normal" 
            fullWidth/> 

        <Button 
            type="submit"
            variant="contained"
            fullWidth
        >
           Finalizar Cadastro
        </Button>           
      </form>
    );
}

export default DadosEntregas