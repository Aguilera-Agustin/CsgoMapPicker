import React, { useState } from 'react'
import Chip from '@material-ui/core/Chip';
import { nuevoEstado } from '../helpers/cambiarEstadoDeMapa';



export const CadaMapa = ({esteMapa, todosLosMapas, setTodosLosMapas}) => {
    const [estaSeleccionado, setEstaSeleccionado] = useState(false)
 
    const clickearMapa = (e) =>{
        setEstaSeleccionado(!estaSeleccionado)
        setTodosLosMapas(nuevoEstado(esteMapa, todosLosMapas, !estaSeleccionado))
    }
    return (
            <Chip
                label={esteMapa.nombre.toUpperCase()}
                clickable
                color={estaSeleccionado? "primary": "default"}
                onClick={clickearMapa}
                style={{margin:"2px"}}
            />
            
    )
}
