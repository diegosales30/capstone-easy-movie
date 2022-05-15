import {  Routes ,Route } from "react-router-dom";
import { RequireAuth, FreeAuth } from "./routes.js"
import CardMovie from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FakeTickets from "../pages/FAKE_BUY_TICKETS";

const Routest = () => {
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
                        <FakeTickets/>
                    </RequireAuth>
                    }/>
            </Routes>
 

    )

}
export default Routest