import React from 'react'
import { Search } from '@mui/icons-material';
import { TextField, InputAdornment } from '@mui/material';

import * as Styled from "./style";

export const SearchUser = (props: { searchText: (arg0: any) => any; text: string; updateText: any }) => {
   return (
      <Styled.FiltersContainer 
         onSubmit={props.searchText}
      >
         <Styled.Input
            id='nome'
            placeholder="Pesquisar por nome, nome de usuário ou email"
            value={props.text}
            onChange={props.updateText}
         />

        <TextField
            label="Pesquisar por nome, nome de usuário ou email"
            id='nome'
            placeholder="Pesquisar por nome, nome de usuário ou email"
            value={props.text}
            onChange={props.updateText}
            fullWidth
            size="small"
            variant="outlined"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Search />
                    </InputAdornment>
                )
            }}
        />
      </Styled.FiltersContainer>
   )
};
