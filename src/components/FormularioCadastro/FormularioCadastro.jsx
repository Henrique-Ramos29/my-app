import React, { useEffect, useState } from "react";
import DadosUsuario from "./DadosUsuario";
import DadosPessoais from "./DadosPessoais";
import DadosEntregas from "./DadosEntregas";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";

function FormularioCadastro({ aoEnviar }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    
    useEffect(()=>  {
        if(etapaAtual === formularios.length-1) {
        aoEnviar(dadosColetados)  
        } 
    })
    
    const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntregas aoEnviar={coletarDados} />,
    <Typography variant="h4">Obrigado cadadstro concluido!</Typography>
];

    function coletarDados(dados) {
        setDados({...dadosColetados, ...dados});
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1)
    }
    return <>
    <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Usuario</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Cadastro Concluido</StepLabel></Step>
    </Stepper>
    return <>{formularios[etapaAtual]}</>;
    </>
}
export default FormularioCadastro;
