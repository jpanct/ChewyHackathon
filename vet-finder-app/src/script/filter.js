import { useState } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';
import style from "../style/filter.module.css";
import { styled, alpha } from '@mui/material/styles';
import CircleLogo from "../elements/CircleLogo.png"
import dog from "../elements/dog.png"
import dog2 from "../elements/dog2.png"
import cat from "../elements/cat.png"
import cat2 from "../elements/cat2.png"
import small from "../elements/small.png"
import small2 from "../elements/small2.png"
import bird from "../elements/bird.png"
import bird2 from "../elements/bird2.png"
import fish from "../elements/fish.png"
import fish2 from "../elements/fish2.png"
import reptile from "../elements/reptile.png"
import reptile2 from "../elements/reptile2.png"

function Filter(){
    const [isDogClicked, setIsDogClicked] = useState(false);
    const [isCatClicked, setIsCatClicked] = useState(false);
    const [isSmallClicked, setIsSmallClicked] = useState(false);
    const [isBirdClicked, setIsBirdClicked] = useState(false);
    const [isFishClicked, setIsFishClicked] = useState(false);
    const [isReptileClicked, setIsReptileClicked] = useState(false);
    
    
    const handleDogClick = () => {
      setIsDogClicked(!isDogClicked);
    };
    
    const handleCatClick = () => {
      setIsCatClicked(!isCatClicked);
    };

    const handleSmallClick = () => {
        setIsSmallClicked(!isSmallClicked);
    };

    const handleBirdClick = () => {
        setIsBirdClicked(!isBirdClicked);
    };

    const handleFishClick = () => {
        setIsFishClicked(!isFishClicked);
    };

    const handleReptileClick = () => {
        setIsReptileClicked(!isReptileClicked);
    };
    
    return(
        <main>  
            <div className={style.topbar}> 
                <img src={CircleLogo} alt="Circle Logo" />
                <p className={style.title}> Filters </p>
            </div>
            <div className={style.petTypes}>
            <p> Pet Types </p>
            <div className={style.petTypes2}>
                <div className={style.buttonContainer}>
                <button className={style.dogButton} onClick={handleDogClick}>
                    <img src={isDogClicked ? dog2 : dog} alt="Dog Icon" />
                    <p>Dogs</p>
                </button>
                </div>
                <div className={style.buttonContainer}>
                <button className={style.dogButton} onClick={handleCatClick}>
                    <img src={isCatClicked ? cat2 : cat} alt="Cat Icon" />
                    <p>Cats</p>
                </button>
                </div>
                <div className={style.buttonContainer}>
                <button className={style.dogButton} onClick={handleSmallClick}>
                    <img src={isSmallClicked ? small2 : small} alt="Small Animal Icon" />
                    <p>Small Animals</p>
                </button>
                </div>
                <div className={style.buttonContainer}>
                <button className={style.dogButton} onClick={handleBirdClick}>
                    <img src={isBirdClicked ? bird2 : bird} alt="Bird Icon" />
                    <p>Birds</p>
                </button>
                </div>
                <div className={style.buttonContainer}>
                <button className={style.dogButton} onClick={handleFishClick}>
                    <img src={isFishClicked ? fish2 : fish} alt="Fish Icon" />
                    <p>Fish</p>
                </button>
                </div>
                <div className={style.buttonContainer}>
                <button className={style.dogButton} onClick={handleReptileClick}>
                    <img src={isReptileClicked ? reptile2 : reptile} alt="Reptile Icon" />
                    <p>Reptile</p>
                </button>
                </div>
            </div>
        </div>

        </main>
    );
}
export default Filter;