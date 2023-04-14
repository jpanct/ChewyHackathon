import './App.css';
import React from 'react';
// import { useState } from "react";
// import { clinicData } from './clinic-info';
import Search from './script/Search';
import Map from "./pages/Map"
import Welcome from "./script/welcome"
import Filter from "./script/filter"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Search />} />
        <Route path="/welcome" element = {<Welcome />} />
        <Route path="/filter" element = {<Filter />} />
        <Route path = '/map' element = {<Map />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;