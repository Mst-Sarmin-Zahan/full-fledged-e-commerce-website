import React from "react";
import Button from 'react-bootstrap/Button';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import style from "../src/assets/CSS/style.css"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReadPage/>}/>
        <Route path="/createList" element={<CreatePage/>}/>
        <Route path="/updateList" element={<UpdatePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
