import axios from "axios";
import { toast } from "react-toastify";
import { signIn } from "./actions";

//USA OS DADOS EMAIL E PASSWORD E RETORNA TOKEN
//CASO A API RETORNE OS DADOS DE USUARIO OS RETORNA TBM

export const signInThunk = (userData) => (dispatch) => {
  axios
    .post("https://easy-movie.herokuapp.com/login", userData)
    .then((response) => {
      console.log(response.data);
      const { accessToken } = response.data; //PEGA O TOKEN
      localStorage.setItem("@token", accessToken); //GUARDA O TOKEN NA LOCALSTORAGE
      toast.success("Login realizado com sucesso!");
      setTimeout(() => {
        window.location.href = "/"; //REDIRECIONA PARA A PAGINA INICIAL
      }, 2000);
      dispatch(signIn(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
