import React from 'react'
import Link from 'next/link'

import * as S from './style'
 
const Navbar = () => {
    return (
        <S.Navbar>
            <ul>
                <Link href='/' legacyBehavior><a><li>Home</li></a></Link>
                <Link href='/cats' legacyBehavior><a><li>HTTP Cats</li></a></Link>
                <Link href='/dogs' legacyBehavior><a><li>Doguinhos Aleatórios</li></a></Link>
                <Link href='/customers' legacyBehavior><a><li>Clientes</li></a></Link>
            </ul>
        </S.Navbar>
    )
}
 
export default Navbar