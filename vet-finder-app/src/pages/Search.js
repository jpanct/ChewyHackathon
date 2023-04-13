import { useState } from "react";
import { clinicData } from '../clinic-info';
import React from 'react';

const Search = () =>{
    const [clinics, setClinics] = useState(clinicData);

    const filter_clinics = (e)=>{
      const query = e.target.value.toLowerCase();
      const filtered_clinics = clinicData.slice().filter((clinic) => clinic.clinic_name.toLowerCase().includes(query))
  
      setClinics(filtered_clinics);
    }
  
    return (
      <div className="App">
        <label>Search</label>
        <input type="text" onChange={(e) => filter_clinics(e)}/>
          <ul>
            {clinics.map((data) => {
              return <h1 key = {data.clinic_name}> {data.clinic_name}</h1>
            })}
          </ul>
      </div>
    );
}

export default Search;