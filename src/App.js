import { Form, Footer, Header } from "./components";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Form />
      <Footer />
    </div>
    </BrowserRouter>
    
  );

};

