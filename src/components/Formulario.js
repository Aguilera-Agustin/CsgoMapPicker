import { Button } from '@material-ui/core'
import shortid from 'shortid';
import React, { useState } from 'react'
import todosLosMapas from '../helpers/TodosLosMapas'
import todosLosModos from '../helpers/TodosLosModos'
import { validarFormulario } from '../helpers/validarFormulario'
import { EscribirNombre } from './EscribirNombre'
import { SeleccionarModoAleatorio } from './SeleccionarModoAleatorio'
import { SeleccionMapa } from './SeleccionMapa'
import { SeleccionModos } from './SeleccionModos'
import { Votacion } from './Votacion'
import { Alert } from '@material-ui/lab';

export const Formulario = () => {
    const [seleccionar, setSeleccionar] = useState(true)
    const [mapas, setMapas] = useState(todosLosMapas)
    const [modos, setModos] = useState(todosLosModos)
    const [seleccionarRandom, setSeleccionarRandom] = useState(false)
    const [nombreA, setNombreA] = useState("Equipo A")
    const [nombreB, setNombreB] = useState("Equipo B")
    const [error, setError] = useState({error: false, mensaje: ''})

    const empezar = (e)=>{
        e.preventDefault()
        if(validarFormulario(mapas, modos).valido){
            setError({...error, error: false})
            setSeleccionar(false)
        }
        else{
            
            const cadaError = validarFormulario(mapas, modos)
            setError({error: true, mensaje: cadaError.mensaje})
        }
    }
    return (
        <>
        {seleccionar? (
        <form onSubmit={empezar}>
            <SeleccionMapa mapas={mapas} setMapas={setMapas}/>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:"30px"}}>
                <div style={{marginLeft:'2rem'}}>
                <SeleccionModos modos={modos} setModos={setModos}/>
                <SeleccionarModoAleatorio seleccionarRandom={seleccionarRandom} setSeleccionarRandom={setSeleccionarRandom}/>
                </div>
                <Button type="submit" style={{height:"40px"}} variant="contained" color="secondary">¡EMPEZAR!</Button>
                <div style={{display:'flex', flexDirection:"column", marginRight:'2rem'}}>
                <EscribirNombre nombre={nombreA} setNombre={setNombreA} numero={1}/>
                <EscribirNombre nombre={nombreB} setNombre={setNombreB} numero={2}/>
                </div>
                
            </div>

            {error.error&&(<Alert severity="error" style={{marginTop:'30px'}}>{error.mensaje}</Alert>)}
        </form>

        ): <Votacion key={shortid.generate()} mapas={mapas} random={seleccionarRandom} nombreA={nombreA} nombreB={nombreB} modos={modos}   />}
        </>

    )
}
