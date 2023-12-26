import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ categoria, titulo, precio, descripcion  }) => {
  const { id } = useParams();

  return (
    <>
      <Flex justifyContent="space-between" flexWrap="wrap" p={3}>
      <Card bg={'silver'} borderRadius={33}>
        <CardHeader>
          <h1>{titulo}</h1>
        </CardHeader>
        <CardBody fontWeight={4}>
          <h3>{categoria}</h3>
          <p>${precio}</p>
          <p>{descripcion}</p>
        </CardBody>
        <CardFooter>
            <ItemCount/>
        </CardFooter>
      </Card>
      </Flex>
    </>     
  )
}

export default ItemDetail