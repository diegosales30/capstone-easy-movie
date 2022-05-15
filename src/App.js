import { ToastContainer } from "react-toastify";
import CardMovie from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import Routest from "./routes";

const App = () => {


  return (
    <>
          <Routest />
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

    </>
  );
};

export default App;
