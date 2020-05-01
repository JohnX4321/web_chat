import React from 'react';
import logo from './logo.svg';
//import './App.css';

import Chat from "./components/Chat";
import Join from "./components/Join";
import {BrowserRouter,Route} from "react-router-dom";


const App=()=>{
  return(
      <BrowserRouter>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </BrowserRouter>
  )
}


export default App;
