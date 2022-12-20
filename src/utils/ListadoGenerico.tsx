import React, { ReactElement } from 'react'
import Cargando from './Cargando'

const ListadoGenerico = (props:listadoGenericoProps) => {
    if(!props.listado){
        if(props.cargandoUI){
            return props.cargandoUI
        }
        return <Cargando/>
    }else if(props.listado.length === 0){
        if(props.listadoVacioUI){
            return props.listadoVacioUI
        }
        return <p>No hay elementos mara mostrar</p>
    }else {
        return props.children;
    }
}

export default ListadoGenerico
interface listadoGenericoProps {
    listado: any;
    children: ReactElement; 
    cargandoUI?: ReactElement;
    listadoVacioUI?: ReactElement;
}