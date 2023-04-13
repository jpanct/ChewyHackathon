import './App.css';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './script/welcome';



function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element = {<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;