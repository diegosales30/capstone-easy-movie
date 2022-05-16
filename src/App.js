
import GlobalStyle from "./styles";
import CardMovie from "./pages/Home";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Rotas from "./routes";
const App = () => {
  return (
    <>   
      <GlobalStyle/>
      <ToastContainer
        position="top-right"
        autoClose={2000}





const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}

        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover

      /> 
      <div>
        <CardMovie/>
        <h1>Easy Movie</h1>
      </div>
  </>


      />
      <Rotas />
    </>

  );
};

export default App;
