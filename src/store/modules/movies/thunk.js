import axios from "axios"
import { useEffect } from "react"
import { listMovies } from "./actions"

export const listMoviesThunk = () => (dispatch) =>{

    useEffect(()=>{
        axios.get("").then((response)=>{
            console.log(response)
            //dispatch(listMovies(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


}