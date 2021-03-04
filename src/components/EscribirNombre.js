import { TextField } from '@material-ui/core'
import React from 'react'

export const EscribirNombre = ({nombre, setNombre, numero}) => {
    const cambiarNombre = (e) =>{
        setNombre(e.target.value)
    }
    return (
        <TextField style={{minWidth: 220}} id={nombre} label={`Nombre del equipo ${numero}`} variant={'standard'}  onChange={cambiarNombre} />
    )
}
