import GlobalStyle from "./styles";
import CardMovie from "./pages/Home";

const App = () => {
  return (
    <>   
      <GlobalStyle/> 
      <div>
        <CardMovie/>
        <h1>Easy Movie</h1>
      </div>
  </>

  );
};

export default App;
