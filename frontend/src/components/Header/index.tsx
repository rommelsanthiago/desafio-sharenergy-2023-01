import React from 'react';
import Image from "next/image";

import Logo from '../../assets/logo.png'
import * as S from './style'

const Header = () => {
  return (
    <S.Header>
        <Image src={Logo} alt="" width={250} />
    </S.Header>
  );
};

export default Header;
