import {Navigate , Route as ReactDomRoute } from "react-router-dom";
import { useSelector } from "react-redux";


const Route = ({isPrivate = false,  component: Component, ...rest}) =>{

    const {accessToken} = useSelector(state=> state)

    return(
        <ReactDomRoute 
        {...rest}
        render = {() => {
            return isPrivate === !!accessToken ? (<Component/>) : (<Navigate to={isPrivate ? "/login" : "/dashboard"}/>)
        }}

    
    />

    )
}

export default Route