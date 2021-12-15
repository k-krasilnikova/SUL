import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import Menu from "./components/Menu"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='menu'>
        <Header />
        <Menu /> 
      </div> 
    </BrowserRouter>  
  );
}

export default App;
