import { useState } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';
import style from "../style/welcome.module.css";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ChewyLogo from "../elements/ChewyLogo.svg"
import VetFinderLogo from "../elements/VetFinderLogo.svg"


function Welcome() {
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
      }));

      const SearchWrapper = styled('div')({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '100%',
        marginTop: '50px',
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

      return (
        <main>
          <img src={ChewyLogo} alt="Chewy Logo" class="mainlogo" style={{border: "red solid 1px"}} />
          <img src={VetFinderLogo} alt="Vet Finder Logo" class="sublogo" style={{border: "red solid 1px"}}/>
          <div className="styles.SearchContainer">
            <SearchWrapper>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon style={{ color: "#2349BB" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </SearchWrapper>
          </div>
        </main>
      );
    }

export default Welcome;