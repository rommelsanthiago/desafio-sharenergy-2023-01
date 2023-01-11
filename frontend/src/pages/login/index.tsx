import React, { useState } from 'react';
import Head from 'next/head';
import Image from "next/image";
import { useRouter } from 'next/router';
import {
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import * as S from '../../styles/login';
import Logo from '../../assets/logo.png'
import useForm from '../../hooks/useForm';
import { login } from '../../services/auth';

const Login = () => {
  const { form, onChange, clean } = useForm({ username: "", password: "" });
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmitForm = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    login(form, clean, router, checked);
  };

  return (
    <>
      <Head>
        <title>Sharenergy Login</title>
        <meta name="description" content="Challenge Sharenergy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Main>
        <Image src={Logo} alt="Logo Sharenergy" width={400} />
        <S.Form onSubmit={onSubmitForm}>
          <h2>Seja bem-vindo!</h2>
          <div>
            <S.Span>username:</S.Span>
            <S.Input
              type="text"
              value={form.username}
              onChange={onChange}
              name={"username"}
              placeholder="Minimo 4 caracteres"
              required
            />
          </div>
          <div>
            <S.Span>password:</S.Span>
            <S.Input
              name={"password"}
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={onChange}
              placeholder="Minimo 6 caracteres"
              required
              inputProps={{ pattern: "^.{6,}" }}
              title={"Minimo 6 caracteres"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={(e) => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div>
            <section>
              <input type="checkbox" onChange={e => { if (e.target.checked) setChecked(true) }} />Lembrar de mim
            </section>
            <S.Button type={"submit"}>ENTRAR</S.Button></div>
        </S.Form>
      </S.Main>
    </>
  );
};

export default Login;
