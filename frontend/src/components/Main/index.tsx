import React from 'react';

import * as S from './style';

const Main = (props: any) => {
  return (
    <S.Main>
        {props.children}
    </S.Main>
  );
};

export default Main;
