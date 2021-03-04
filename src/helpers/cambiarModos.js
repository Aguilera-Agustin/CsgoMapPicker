export const cambiarModo = (modos, miModo, ) =>{
    let modoSeleccionado = []
    modos.forEach(cadaModo => {
        if(cadaModo.nombre === miModo){
            modoSeleccionado.push({
                ...cadaModo,
                seleccionado: true
            })
        }
        else{
            modoSeleccionado.push({
                ...cadaModo,
                seleccionado: false
            })
        }
    });
    return modoSeleccionado
}