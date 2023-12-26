import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    
  return (
    <>
        {
            productos.map((p)=> {
                return(
                    <Item
                    key={p.id}
                    categoria={p.category} 
                    titulo={p.titulo}
                    descripcion={p.descripcion} 
                    precio={p.precio}/>
                )
            })
        }
    </>
  )
}

export default ItemList