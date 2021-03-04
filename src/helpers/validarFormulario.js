export const validarFormulario = ( mapas, modos) =>{
    if((mapas.find(cadaMapa => cadaMapa.seleccionado === true))){
        if(modos.find(cadaModo => cadaModo.seleccionado === true)){
            const mapasSeleccionados = mapas.filter(cadaMapa => cadaMapa.seleccionado === true)
            if(mapasSeleccionados.length >6){
                
                return {
                    mensaje: '',
                    valido: true
                }
            }
            else {
                return {
                    mensaje: 'Seleccione al menos 7 mapas',
                    valido: false
                }
            }
        }
        else{
            return {
                mensaje: 'Selecciona un modo',
                valido: false
            }
        }
    }
    else{
        return {
            mensaje: 'Selecciona al menos 7 mapas',
            valido: false
        }
    }
}
