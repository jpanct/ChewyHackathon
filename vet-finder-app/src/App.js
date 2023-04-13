import './App.css';
import React from 'react';
import { useState } from "react";
import { clinicData } from './clinic-info';
import Search from './pages/Search';
import Map from "./pages/Map"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Search />} />
        <Route path = '/map' map = {<Map />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
