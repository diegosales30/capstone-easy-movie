import GlobalStyle from "./styles";
import CardMovie from "./pages/Home";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>   
      <GlobalStyle/>
      <ToastContainer
        position="top-right"
        autoClose={2000}
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

  );
};

export default App;
