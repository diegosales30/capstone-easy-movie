import {Navigate, useLocation } from "react-router-dom";

    const token = localStorage.getItem('@token') || ''

    let authed = !!token
    export const RequireAuth = ({ children: Children }) => {
 
        let location = useLocation()

        return authed ? Children : <Navigate to={"/login"} />
    }

    export const FreeAuth = ({children: Children}) => {

        return authed ? <Navigate to={"/"}/> : Children

    }


// HEADER COM INFOS DE USER É PRIVADO
// PAGE BUY TICKETIS É PRIVADA

//HOME COM REGISTER E LOGOUT NAO PRIVADA

//LOGIN NAO PODE SER ACESSADA SE TIVER TOKEN 
//REGISTER NAO PODE SER ACESSADO SE TIVER TOKEN