import React from 'react';
import Image from 'next/image';
import MailIcon from '@mui/icons-material/Mail';

import { IRandomUser } from '../../types/user';
import * as S from './style'

const CardUser = ({user}: IRandomUser) => {
  return (
    <S.Container>
        <S.Profile>
            <Image src={user.picture.large} alt={user.name.title} width={100} height={100} />
            <span>{user.registered.age}</span>
        </S.Profile>
            <h2>{user.name.first} {user.name.last}</h2>
            <p>{user.login.username}</p>
            <h3><MailIcon /> {user.email}</h3>
    </S.Container>
  );
};

export default CardUser;
