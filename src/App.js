import { Signup, Footer, Header } from "./components";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Signup />
      <Footer />
    </div>
    </BrowserRouter>
    
  );

};

