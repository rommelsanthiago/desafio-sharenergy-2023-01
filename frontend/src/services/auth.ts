import axios from "axios";
import { NextRouter } from "next/router";
import { User } from "../types/user";
const BASE_URL = "https://sharenergy-backend.onrender.com";

export const login = (body: User, clean: () => void, router: NextRouter | string[], checked: Boolean) => {
    axios
        .post(`${BASE_URL}/user/login`, body)
        .then((res) => {
            clean();
            router.push('/')
            checked ?
                localStorage.setItem("token", res.data.access_token)
                : sessionStorage.setItem("token", res.data.access_token);
        })
        .catch((err) => {
            alert("Usuário ou senha incorreto");
            clean();
        });
};
