import { useState } from "react";
import React from 'react'
import { Button, Spacer } from "@chakra-ui/react";

const ItemCount = () => {

    const [contador, setContador] = useState(0)
    const restar = () => {
      if (contador>0){
      setContador(contador-1)
      }
    }
    const sumar = () => {
      setContador(contador+1)
    }
    const mensajeCarrito = () => {
      alert(`Agregaste al carrito ${contador} unidades`)
    }
    return(
      <>
        <Button onClick={sumar}>
          +
        </Button>
        <Spacer/>
        <Button onClick={mensajeCarrito}>
          Agregar al carrito {contador}
        </Button>
        <Spacer/>
        <Button onClick={restar} >
          -
        </Button>
      </>
    )
}

export default ItemCount