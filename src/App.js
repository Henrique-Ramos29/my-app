import React, { Component } from 'react'
import './App.css';
import FormularioCadastro from "./components/FormularioDeCadastro/FormularioCasdatro.jsx";
import { Container, Typography } from '@mui/material';
import "fontsource-roboto"


class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography component="h1" variant="h3" align='center'>Formulário de casdatro</Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
