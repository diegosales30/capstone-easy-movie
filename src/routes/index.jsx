import {  Routes ,Route } from "react-router-dom";
import { RequireAuth, FreeAuth } from "./routes.js"
import CardMovie from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


const Router = () => {
    return(
            <Routes>
                <Route path="/login"  
                    element={
                    <FreeAuth>
                        <Login/>
                    </FreeAuth>}
                    />
                <Route path="/register" 
                    element={
                    <FreeAuth>
                        <Register/>
                    </FreeAuth>
                    }/>
                <Route path="/" 
                    element={
                    <CardMovie/>}
                    />
                <Route path="/buy" 
                    element={
                    <RequireAuth>
                        {/* buy tickets vai aqui */}
                    </RequireAuth>
                    }/>
            </Routes>
    )
}
export default Router
