export const nuevoEstado = (esteMapa, todosLosMapas, estaSeleccionado) =>{
    let nuevoEstado = []
    todosLosMapas.forEach(cadaMapa => {
        if(cadaMapa === esteMapa){
            nuevoEstado.push(
                {...esteMapa,
                seleccionado: estaSeleccionado})
        }
        else{
            nuevoEstado.push(cadaMapa)
        }
    });
    return nuevoEstado
}