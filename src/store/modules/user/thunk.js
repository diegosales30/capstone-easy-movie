import axios from "axios"
import { signIn } from "./actions"

//USA OS DADOS EMAIL E PASSWORD E RETORNA TOKEN
//CASO A API RETORNE OS DADOS DE USUARIO OS RETORNA TBM
export const signInThunk = (userData) => (dispatch) =>{
    axios.post('', userData).then((response)=>{
        console.log(response.data)
        localStorage.setItem('@token', /*token*/)

        dispatch(signIn(response.da))
    })
    .catch((err)=>{
        console.log(err)
    })


}