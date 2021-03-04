import { FormControlLabel, FormGroup } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';

import React from 'react'

export const SeleccionarModoAleatorio = ({seleccionarRandom, setSeleccionarRandom}) => {
    return (
        <FormGroup row>
        <FormControlLabel
          control={<Checkbox checked={seleccionarRandom} onChange={()=>setSeleccionarRandom(!seleccionarRandom)} name="aleatorio" />}
          label="Elegir mapas aleatorios"
        />
        </FormGroup>
    )
}
