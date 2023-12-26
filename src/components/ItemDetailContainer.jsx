import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const productos = [
        { id:1, categoria:"Zapatillas", titulo: "Air Jordan 1 Retro High OG", precio:299.999, descripcion: "El Air Jordan 1 Retro High renueva el calzado clásico, y te ofrece un nuevo look con una sensación familiar. Los materiales con nuevos colores y texturas aportan una expresión moderna al favorito de siempre."},
        {id:2, catergoria:"Zapatillas", titulo:"Nike Air Force 1 '07", precio:177.999, descripcion:"La luminosidad sigue viva con este calzado de básquetbol original. Al combinar la comodidad para la cancha con el estilo para usar fuera de ella, le da un giro nuevo a lo que mejor conoces: la confección inspirada en los años 80, los detalles audaces y nada más que el estilo de básquetbol." },
        {id:3,categoria:"Buzos", titulo:"Nike Therma-FIT", precio:87.999, descripcion:"Abrígate mientras entrenas con este cálido buzo de tejido Fleece. Como parte de nuestra colección Body Shop, esta prenda celebra tus repeticiones como una puesta a punto de tu cuerpo. El estampado salpicado de aceite y el gráfico de Nike Body Shop son solo algunos de los signos del trabajo que realizas." },
        {id:4,categoria:"Buzos", titulo:"Nike Sportswear", precio:90.399, descripcion:"Disfruta de la comodidad suave y cálida de nuestro buzo con capucha de tela French Terry y ten un día Nike. Combinada con tu calzado favorito, puedes brillar como la mejor y más brillante versión de ti." },
        {id:5,categoria:"Remeras", titulo:"Nike Dri-FIT Academy", precio:24.799, descripcion:"Impulsa tu entrenamiento diario con la remera Nike Dri-FIT Academy. La tela suave y elástica absorbe el sudor de la piel y los paneles de malla te mantienen fresco para que puedas concentrarte en jugar a tu máximo nivel. Este producto está confeccionado al 100% con fibras de poliéster reciclado"},
        {id:6,categoria:"Remeras", titulo:"Nike DriFIT", precio:48.799, descripcion:"Todos los días son de movimiento cuando te pones esta playera absorbente de sudor. Esta prenda es relajada y suave para ayudarte a mover libremente, al mismo tiempo que te dedicas a tus repeticiones o a empaquetar cajas." },
        
    ]
    const mostrarProductos = new Promise((resolve, reject) => {
        if (productos.length > 0){
            setTimeout (() => {
                resolve(productos)
            }, 2000)
        } else {
            reject ("No se obtuvieron productos")
        }
    })

    mostrarProductos
        .then((resultado) => {
        })
        .catch((error) => {
            console.log(error)
        })


  return (
    <>
       {
            productos.map((p)=> {
                return(
                    <ItemDetail
                    key={p.id}
                    categoria={p.categoria} 
                    titulo={p.titulo}
                    descripcion={p.descripcion} 
                    precio={p.precio}/>
                )
            })
        }  
    </>

  )
}

export default ItemDetailContainer