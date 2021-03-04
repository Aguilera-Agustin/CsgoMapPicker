import { Divider, Typography } from '@material-ui/core'
import React from 'react'
import { CadaMapa } from './CadaMapa'

export const SeleccionMapa = ({mapas, setMapas}) => {
    return (
        <>
            <Typography align="center" style={{marginTop:"10px"}}>Mapas</Typography>
        <ul style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            {mapas.map((cadaMapa,id) => (<CadaMapa esteMapa={cadaMapa} todosLosMapas={mapas} setTodosLosMapas={setMapas} key={id}/>))}
        </ul>
        <Divider/>
        </>
    )
}
