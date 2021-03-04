import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import shortid from 'shortid';

export const Votacion = ({mapas, seleccionarRandom, nombreA, nombreB, modos}) => {
    const [seleccionaA, setSeleccionaA] = useState(true)
    const [mapasVetados, setMapasVetados] = useState([])
    const [terminoVotacion, setTerminoVotacion] = useState(false)
    const useStyles = makeStyles(esteMapa => ({
        cadaMapa : {
            display:'flex', 
            alignItems:'center', 
            flexDirection:'column',
            padding:"2px", 
            cursor: 'pointer',
        }
    }))
    const classes = useStyles()
    const modoActivo = modos.filter(cadaModo => cadaModo.seleccionado===true)[0].nombre
    
    const seleccionarMapa = (e) =>{
        if(!terminoVotacion){

            switch (modoActivo) {
                case 'Mejor de 1':
                    if(!(mapasVetados.length===(mapas.length -2))){
                        if(!(mapasVetados.includes(e.target.id))){
                            setMapasVetados([...mapasVetados, e.target.id])
                            setSeleccionaA(!seleccionaA)
                    }
                }
                else if ((mapasVetados.length===(mapas.length -2))){
                    setMapasVetados([...mapasVetados, e.target.id])
                    setSeleccionaA(!seleccionaA)
                    setTerminoVotacion(true)
                }
                
                return;
                case 'Mejor de 3':
                    if(!((mapasVetados.length===(mapas.length -4)))){
                        if(!mapasVetados.includes(e.target.id)){
                            setMapasVetados([...mapasVetados, e.target.id])
                            setSeleccionaA(!seleccionaA)
                        }
                    }
                    else if ((mapasVetados.length===(mapas.length -4))){
                        setMapasVetados([...mapasVetados, e.target.id])
                        setSeleccionaA(!seleccionaA)
                        setTerminoVotacion(true)
                    }
                    return;
                case 'Mejor de 5':
                    if(!((mapasVetados.length===(mapas.length -6)))){
                        if(!mapasVetados.includes(e.target.id)){
                            setMapasVetados([...mapasVetados, e.target.id])
                            setSeleccionaA(!seleccionaA)
                        }
                    }
                    else if ((mapasVetados.length===(mapas.length -6))){
                        setMapasVetados([...mapasVetados, e.target.id])
                        setSeleccionaA(!seleccionaA)
                        setTerminoVotacion(true)
                    }
                    
                    return;
                    default:
                        return;
                    }
                }
            }
                
  

    return (
        <>   
            <Typography  color="initial">
            {!terminoVotacion? (seleccionaA ? (`Bannea ${nombreA}`) : (`Bannea ${nombreB}`)) : ("Mapas a jugar : ")}
            </Typography>          
            <Grid style={{marginTop:"10px"}} container spacing={3} >
                {mapas.map(cadaMapa => (
                    <Fragment key={shortid.generate()}>
                            {!mapasVetados.includes(cadaMapa.nombre)&&
                            <>
                                <Grid id={cadaMapa.nombre} item xs={3}  >
                                <Paper id={cadaMapa.nombre}  className={classes.cadaMapa} key={shortid.generate()} onClick={seleccionarMapa}>
                                <div id={cadaMapa.nombre} key={shortid.generate()} content="map" src={cadaMapa.url} style={{height: "100px", width:"100px", borderRadius:"100%", background:`url(${cadaMapa.url})`, backgroundSize:'cover', backgroundPosition:'center', }}/>     
                                <Typography key={shortid.generate()} id={cadaMapa.nombre} variant="subtitle2" >{cadaMapa.nombre.toUpperCase()}</Typography>
                                </Paper>
                                </Grid>
                            </>
                        }
                        </Fragment>
                ))}
            </Grid>
        </>
    )
}
