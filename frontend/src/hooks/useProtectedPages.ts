import { useEffect } from "react";
import { useRouter } from 'next/router';


export const useProtectedPage = async () => {
    const router = useRouter();
    
    useEffect( () => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");

        if(!token) {
            router.push('/login');
        };
    });
};

export const allowed = () => {
    return false && setTimeout(() => {
        return (localStorage.getItem("token") || sessionStorage.getItem("token")) ? true : false;
    }, 1000) 
};
