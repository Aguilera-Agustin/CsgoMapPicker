import React from 'react'
import { Formulario } from './Formulario'
import Container from '@material-ui/core/Container'
import { Link, Paper, Typography } from '@material-ui/core'


export const CsgoMapPicker = () => {
    return (

          <Container maxWidth="md">
            <Paper elevation={5} style={{marginTop:"70px", padding:"30px"}}>
            <Formulario/>
            </Paper>
            <Typography align="center" style={{marginTop:"20px"}}  color="textSecondary" gutterBottom>
              Website creado 100% por <Link href="https://www.linkedin.com/in/aguilera-agustin/" color="secondary">Agustín Aguilera</Link>
            </Typography>          

            </Container>
       
    )
}
