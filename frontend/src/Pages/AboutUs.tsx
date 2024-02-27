import React from 'react';
import {AboutUsTitleStyle, EchipaContainerStyle, MainStyle, ParagraphStyle, VisionTitleStyle} from "./AboutUs.styles";

import logo from "./logo.png";
import echipa from "./echipa1.png";
import bee from "./bee.jpg";
import monkey from "./monkey.png";
import dog from "./dog.svg";
import bird from "./bird.svg";
import {Button} from "@mui/material";

const Comp_echipa = (): JSX.Element => {
    return (
        <div style={{ ...EchipaContainerStyle, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>.
            <h1 style={{...AboutUsTitleStyle, marginLeft:'360px'}}> Despre noi </h1>
        </div>

    );
};
export const AboutUs = (): JSX.Element => {
    return (

        <div style={MainStyle}>
            <Comp_echipa/>
            <div style={{ backgroundColor: 'rgba(169, 169, 169, 0.2)', padding: '10px', borderRadius: '10px', marginTop: '30px' , maxWidth:'2500px'}}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <img src={logo} alt="Imagine Descriptivă" style={{ maxWidth: '30%', marginRight: '20px', marginLeft: '40px', marginTop: '100px', opacity: 0.7 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={VisionTitleStyle}>Scopul nostru</p>
                        <p style={{ fontSize: '1.7rem',
                            lineHeight: '1.6',
                            color: '#333'}}>Echipa noastră, formată din trei fete pasionate, și-a unit forțele pentru a crea un site cu viziunea de a facilita comunicarea între posesorii de animale de companie și medicii veterinari. Ne propunem să construim un spațiu virtual în care iubitorii de animale și profesioniștii veterinari pot interacționa eficient și să ofere suport reciproc.

                            Prin acest proiect, aspirăm să adunăm o comunitate dedicată în care informațiile și experiențele legate de sănătatea și bunăstarea animalelor pot circula liber. Dorim să oferim o platformă în care posesorii de animale de companie pot găsi răspunsuri la întrebările lor, să-și împărtășească experiențele și să primească sfaturi valoroase de la profesioniștii veterinari.</p>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <p style={{
                    fontSize: '2rem',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                    color: 'black',
                    textTransform: 'uppercase'
                }}>
                    Principiile noastre
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' , maxWidth:'2500px'}}>
                <img src={bee} alt="Imagine Descriptivă" style={{ maxWidth: '12%', marginRight: '20px',marginLeft: '20px', marginTop:'20px', opacity:0.7}} />
                <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <p style={VisionTitleStyle}>Colaborare</p>
                    <p style={ParagraphStyle}>Suntem în permanență conectați cu partenerii noștri, furnizorii și clienții noștri. Colaborarea depășește actul medical veterinar în sine și se transformă într-o comunicare deschisă și transparentă, în încredere și disponibilitate reciprocă. Pentru că toți avem un scop comun: bunăstarea animalelor de companie.
                    </p>
                    </p>
                </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', maxWidth:'2500px' }}>
                <img src={dog} alt="Imagine Descriptivă" style={{ maxWidth: '11%', marginRight: '20px',marginLeft: '40px', marginTop:'20px', opacity:0.7}} />
                <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <p style={VisionTitleStyle}>Responsabilitate</p>
                    <p style={ParagraphStyle}>Înțelegem pe deplin misiunea pe care ne-am asumat-o. Știm că uneori suntem singura soluție, iar acest lucru ne determină să abordăm lucrurile extrem de serios. Fie că este vorba despre modul în care acționăm în calitate de medici veterinari sau despre asumarea rolului de consilieri pentru posesorii de animale de companie. Ambele sarcini sunt la fel de importante și definesc munca noastră.</p>
                </p>
                </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' , maxWidth:'2500px'}}>
                <img src={monkey} alt="Imagine Descriptivă" style={{ maxWidth: '20%', marginRight: '0px',marginLeft: '20px', marginTop:'20px', opacity:0.7}} />
                <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <p style={VisionTitleStyle}>Invatare Constanta</p>
                    <p style={ParagraphStyle}> Echipa noastră este într-un proces continuu de îmbunătățire medical-veterinară și este mereu la curent cu știri, inovații și schimbări în domeniu. Învățăm, de asemenea, din fiecare pacient pe care îl avem și din fiecare caz în parte. Adunăm lecții valoroase din experiențele zilnice - fie ele succese sau uneori greșeli - și astfel devenim mai buni și mai puternici. Evoluăm. Pentru binele pacienților noștri.</p>
                </p>
            </div>

        </div>
    );
}