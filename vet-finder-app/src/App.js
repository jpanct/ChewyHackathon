import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import CLINIC_INFO from "./clinic-info.json"

const getFilteredItems = (query, items) => {
  if(!query){
    return;
  }
  return CLINIC_INFO;
  // return item.filter((clinic) => )
}


function App() {
const [query, setQuery] = useState("");

const { clinics } = CLINIC_INFO;
const { current_clinic } = clinics;

const filteredItems = getFilteredItems(query,items);
  return (
    <div className="App">
      <label>Search</>
      <input type = "text" onChange = {(e) => setQuery(e.target.value)}/>
      <ul>
        {filteredItems}
      </ul>
    </div>
  );
}

export default App;
