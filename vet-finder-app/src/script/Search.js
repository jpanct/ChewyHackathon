import { useState } from "react";
import { clinicData } from '../clinic-info';
import React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import style from "../style/Search.module.css";
import ChewyLogo from "../elements/ChewyLogo.svg"
import VetFinderLogo from "../elements/VetFinderLogo.svg"
import { styled, alpha } from '@mui/material/styles';




const Search = () => {
  const [filteredClinics, setFilteredClinics] = useState([]);
  const [query, setQuery] = useState('');


  const filter_clinics = (e) => {
    const newQuery = e.target.value.toLowerCase(); // assign the new query value to a new variable
    setQuery(newQuery);
    const filtered_clinics = clinicData.filter((clinic) => clinic.clinic_name.toLowerCase().includes(query));
    setFilteredClinics(filtered_clinics);
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.5),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 1),
    },
   
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  })
  );

  const SearchWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '50%',
    width: '100%',
    // marginTop: '50px',
});

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const delayedFilterClinics = debounce(filter_clinics, 500);

  return (
      <main>
          <div className={style.backgroundImage}>
            <div className={style.logoAndSearchWrapper}>
              <div className={style.logoAndSearch}>
                <img src={VetFinderLogo} alt="Vet Finder Logo" className={style.vetFinderLogo} />
                  <SearchWrapper>
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon style={{ color: "#2349BB" }} />
                      </SearchIconWrapper>
                      
                      <StyledInputBase
                        placeholder="Your current location"
                        inputProps={{ 'aria-label': 'search' }}
                        value={query}
                        onChange={(e) => {filter_clinics(e)}}
                      />
                    </Search>
                  </SearchWrapper>
                  <div className={style.result}>
                    {filteredClinics.length > 0 && (
                          <ul className={style.clinicList}>
                            {filteredClinics.slice(0, 5).map((data) => (
                              <h1 key={data.clinic_name + data.zip + data.specialities[0]} className={style.clinicName}>
                                {data.clinic_name}
                              </h1>
                            ))}
                          </ul>
                        )}
                  </div>
              </div>    {/* logoAndSearch end */}
            </div>      {/* logoAndSearchWrapper end */}
          </div>        {/* backgroundImage end */}
          
      </main>
  );
}




export default Search;