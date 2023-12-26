import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ categoria, titulo, precio, descripcion  }) => {
  return (
    <>
      <Flex justifyContent="space-between" flexWrap="wrap" p={3}>
      <Card bg={'silver'} borderRadius={33}>
        <CardHeader>
          <h1>{titulo}</h1>
        </CardHeader>
        <CardBody fontWeight={15}>
          <h3>{categoria}</h3>
          <p>${precio}</p>
        </CardBody>
        <CardFooter>
          <Link to={'/item/:id'}>
            <Button>
              Más información
            </Button>
          </Link>
        </CardFooter>
      </Card>
      </Flex>
    </>     
  )
}

export default Item