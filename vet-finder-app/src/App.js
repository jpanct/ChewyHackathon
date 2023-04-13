import './App.css';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './script/welcome';
import Filter from './script/filter';


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element = {<Welcome />} />
      <Route path="/filter" element = {<Filter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;