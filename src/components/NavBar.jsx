import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Spacer,
    Box,
    Flex,
  } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
        <Flex bg={'black'} m={3}  color={'white'} padding={5} borderRadius={20}>
            <Menu>
                <MenuButton>
                    Menu
                </MenuButton>
                <MenuList bg={'black'}>
                    <MenuItem bg={'black'}>
                        <Link to={'/category/Buzos'}>Buzos</Link>
                    </MenuItem>
                    <MenuItem bg={'black'}>
                        <Link to={'/category/Remeras'}>Remeras</Link>
                    </MenuItem>
                    <MenuItem bg={'black'}>
                        <Link to={'/category/Zapatillas'}>Zapatillas</Link>
                    </MenuItem>
                </MenuList>
                <Spacer/>
                <Box fontSize={20}>
                    <Link to={"/"}><h1>Tienda Virtual</h1></Link> 
                </Box>
                <Spacer/>
                <Box>
                    <CartWidget/>
                </Box>
            </Menu>
        </Flex>
    </>
  )
}

export default NavBar