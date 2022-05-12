import { registerThunk, signInThunk } from "../store/modules/user/thunk"
import { useDispatch, useSelector } from "react-redux"
import { Container } from "./style"


const PageLoginTest = () =>{

    const data = {email:'easymovie@mail.com', password:'12345678'}
    const dataRegister = {email:"batatinha12234@gmail.com" , password:"12345678", user:"Batatinha" }


    const dispatch = useDispatch()


    return(
        <Container>
            <h3>Login</h3>
            <input type={'text'}/>
            <input type={'text'}/>
            <button onClick={()=>dispatch(signInThunk(data))}></button>
            <h3>Cadastro</h3>
            <input type={'text'}/>
            <input type={'text'}/>
            <button onClick={()=>dispatch(registerThunk(dataRegister))}></button>
        </Container>


    )

}
export default PageLoginTest