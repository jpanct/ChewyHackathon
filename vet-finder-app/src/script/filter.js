import { useState, useEffect} from "react";
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
import pig from "../elements/pig.png"
import pig2 from "../elements/pig2.png"
import horse from "../elements/horse.png"
import horse2 from "../elements/horse2.png"
import CheckIcon from '@mui/icons-material/Check';




function Filter(){
    const [isClicked, setIsClicked] = useState(false);
    const [petTypeData, setPetTypeData] = useState([
        { label: 'Dogs', icon: { default: dog, clicked: dog2 }, clicked: false },
        { label: 'Cats', icon: { default: cat, clicked: cat2 }, clicked: false },
        { label: 'Small Animals', icon: { default: small, clicked: small2 }, clicked: false },
        { label: 'Birds', icon: { default: bird, clicked: bird2 }, clicked: false },
        { label: 'Fish', icon: { default: fish, clicked: fish2 }, clicked: false },
        { label: 'Reptiles', icon: { default: reptile, clicked: reptile2 }, clicked: false },
        { label: 'Farm Animals', icon: { default: pig, clicked: pig2 }, clicked: false },
        { label: 'Horses', icon: { default: horse, clicked: horse2 }, clicked: false },
    ]);

      
    const [buttonsData, setButtonsData] = useState([
        { text: 'Cardiology', isClicked: false },
        { text: 'Nutrition', isClicked: false },
        { text: 'Oncology', isClicked: false },
        { text: 'Neurology', isClicked: false },
        { text: 'Dermatology', isClicked: false },
        { text: 'Radiology', isClicked: false },
    ]);

    const [serviceData, setServiceData] = useState([
        { text: 'Televet', isClicked: false },
        { text: 'Practice Hub', isClicked: false }
    ]);

    const [moreData, setMoreData] = useState([
        { text: 'Insurance Accepted', isClicked: false },
        { text: 'Emergency Visit', isClicked: false }
    ]);
    

    const buttonClass = isClicked ? style.buttonClicked : style.buttonUnclicked;
    

    
    return(
        <main>  
            <div className={style.topbar}> 
                <img src={CircleLogo} alt="Circle Logo" />
                <p className={style.title}> Filters </p>
            </div>

            <div className={style.petTypes}>
                <p> Pet Types </p>
                <div className={style.petTypes2}>
                {petTypeData.map((petType, index) => (
                    <div className={style.buttonContainer}>
                        <button 
                        key={index}
                        className={style.dogButton} 
                        onClick={() => {
                            const updatedPetTypeData = [...petTypeData]; // Make a copy of the array
                            updatedPetTypeData[index].clicked = !updatedPetTypeData[index].clicked; // Toggle the isClicked state for the clicked button
                            setPetTypeData(updatedPetTypeData); // Update the state variable with the new array
                        }}>
                        <img
                        src={petType.clicked ? petType.icon.clicked : petType.icon.default}
                        alt={`${petType.label} Icon`}
                        style={{ transform: 'scale(0.8)' }}
                        />
                            <p>{petType.label}</p>
                        </button>
                    </div>
                ))}
                </div>
            </div>
            <div className={style.specialty}>
                <p> Specialty </p>
                <div className={style.buttonContainer2}>
                    {buttonsData.map((button, index) => (
                        <button
                        key={index}
                        className={button.isClicked ? style.buttonClicked : style.buttonUnclicked}
                        onClick={() => {
                            const updatedButtonsData = [...buttonsData]; // Make a copy of the array
                            updatedButtonsData[index].isClicked = !updatedButtonsData[index].isClicked; // Toggle the isClicked state for the clicked button
                            setButtonsData(updatedButtonsData); // Update the state variable with the new array
                        }}
                        style={{ display: 'flex', alignItems: 'center' }}
                        >
                        {button.isClicked && <CheckIcon fontSize="small" />}
                        {button.text}
                        </button>
                    ))}
                </div>
            </div>

            <div className={style.chewyServices}>
                <p> Chewy Services </p>
                <div className={style.buttonContainer2}>
                    {serviceData.map((button, index) => (
                        <button
                        key={index}
                        className={button.isClicked ? style.buttonClicked : style.buttonUnclicked}
                        onClick={() => {
                            const updatedServiceData = [...serviceData]; // Make a copy of the array
                            updatedServiceData[index].isClicked = !updatedServiceData[index].isClicked; // Toggle the isClicked state for the clicked button
                            setServiceData(updatedServiceData); // Update the state variable with the new array
                        }}
                        style={{ display: 'flex', alignItems: 'center' }}
                        >
                        {button.isClicked && <CheckIcon fontSize="small" />}
                        {button.text}
                        </button>
                    ))}
                </div>
            </div>

            <div className={style.chewyServices}>
                <p> More Filters </p>
                <div className={style.buttonContainer2}>
                    {moreData.map((button, index) => (
                        <button
                        key={index}
                        className={button.isClicked ? style.buttonClicked : style.buttonUnclicked}
                        onClick={() => {
                            const updatedMoreData = [...moreData]; // Make a copy of the array
                            updatedMoreData[index].isClicked = !updatedMoreData[index].isClicked; // Toggle the isClicked state for the clicked button
                            setMoreData(updatedMoreData); // Update the state variable with the new array
                        }}
                        style={{ display: 'flex', alignItems: 'center' }}
                        >
                        {button.isClicked && <CheckIcon fontSize="small" />}
                        {button.text}
                        </button>
                    ))}
                </div>
            </div>
        

        </main>
    );
}
export default Filter;