import React from "react";
import { TextField, Button, Switch, FormControlLabel }  from "@mui/material/";

function FormularioCadastro() {
     return(
        <form>
    
            <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth />

            <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />

            <TextField id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth />

            <FormControlLabel label="Promoção" control={<Switch name="promocoes" defaultChecked />} />

            <FormControlLabel label="Novidades" control={<Switch name="novidades" defaultChecked />} />

            <Button variant="contained" type="submit">Cadastrar</Button>
        </form>

     )
}

export default FormularioCadastro ;
