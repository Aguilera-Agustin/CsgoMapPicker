import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import {cambiarModo} from '../helpers/cambiarModos'
export const SeleccionModos = ({modos, setModos}) => {
    const [modoSeleccionado, setSeleccionado] = useState('')
    
    const cambiarModoLocal = (e) =>{
        setSeleccionado(e.target.value)
        setModos(cambiarModo(modos, e.target.value))
    }
    return (
        

            <FormControl style={{minWidth: 220, marginBottom:'20px'}} >
                <InputLabel id="seleccionar-modo" >Seleccionar Modo</InputLabel>
                <Select
                    labelId="seleccionar-modo"
                    id="seleccionar-modo"
                    value={modoSeleccionado}
                    onChange={cambiarModoLocal}
                    >
                    {modos.map(cadaModo=>(
                        <MenuItem value={cadaModo.nombre} key={cadaModo.nombre}>{cadaModo.nombre}</MenuItem>
                        ))}
                </Select>
            </FormControl>
    
    )
}
