import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCasdatro';
import { Container, Typography } from '@mui/material';
import './App.css';
import 'fontsource-roboto';
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography component="h1" variant="h3" align='center'>Formulário de casdatro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}
function aoEnviarForm(dados) {
  console.log(dados)
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF dever 11 digitos." }
  } else {
    return { valido: true, texto: "" };
  }
}

export default App;
