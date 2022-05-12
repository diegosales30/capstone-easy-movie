import axios from "axios"
import { signIn } from "./actions"
import { register } from "./actions"

//USA OS DADOS EMAIL E PASSWORD E RETORNA TOKEN
//CASO A API RETORNE OS DADOS DE USUARIO OS RETORNA TBM
export const signInThunk = (data) => (dispatch) =>{
    axios.post('https://easy-movie.herokuapp.com/login', data ).then((response)=>{
        dispatch(signIn(response.data))
      localStorage.setItem('@token', JSON.stringify(response.data.accessToken))

    })
    .catch((err)=>{
        console.log(err)
    })
}

export const registerThunk = (data) => (dispatch) =>{
    axios.post('https://easy-movie.herokuapp.com/register', data).then((response)=>{
        console.log(response)
        dispatch(register(true))
    })
    .catch((_)=>dispatch(register(false)))
    

}
