import React from "react";
import imagB from "./DocAnimalPoza.png";
import {animaleInterface} from "./PacientPage.styles";
import {doctori2animaleInterface} from "./DoctorPage.styles";
import {d2aInterface} from "./AnimalPage.styles";

export const MainStyle: React.CSSProperties ={
    backgroundImage: `url(${imagB})`,
    backgroundSize: 'cover',
    height: '100vh',
    width:'100%',
    marginTop:'-10px',
    padding:'0px',
    borderRadius: '5px',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
}
export const SelectAnimalContainerStyle: React.CSSProperties = {
    width: '45%',
    height: '99%',
    backgroundColor: 'silver',
    opacity:0.7,
    padding: '5px',
    borderRadius: '0px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '400px',
    maxHeight:'700',
    marginLeft: '5px',
    marginRight: 'auto',
    marginTop:'10px',
    display: 'flex',
    flexDirection: 'column', // sau 'row', în funcție de cerințe
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
};
export const MyAnimalsContainerStyle: React.CSSProperties = {
    width: '50%',
    height: '50%',
    backgroundColor: 'silver',
    opacity:0.7,
    padding: '5px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '400px',
    marginLeft: '1060px',
    marginTop:'-660px',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column', // sau 'row', în funcție de cerințe
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
};
export const parentDivStyle: React.CSSProperties ={
    position: "absolute",
    left:0,
    top:100,

}
export const myAnimalsLabel:React.CSSProperties ={
    position: "absolute",
    top:20,
    left:0,
    fontSize:40,
    fontFamily:"Times New Roman",
    marginTop:'10px',
    marginLeft:'50px',
    color:'black'
}
export const myAnimalsInfoLabel:React.CSSProperties ={
    position: "absolute",
    top:50,
    left:500,
    fontSize:40,
    fontFamily:"Times New Roman",
    marginTop:'10px',
    marginLeft:'50px',
    color:'black'
}
export const myAnimalsfeedLabel:React.CSSProperties ={
    position: "absolute",
    top:-50,
    left:550,
    fontSize:25,
    fontFamily:"Times New Roman",
    marginTop:'10px',
    marginLeft:'50px',
    color:'black'
}
export interface utilizatorInterface {
    utilizatorId : number,
    nume : string,
    prenume : string,
    adresa : string,
    email : string,
    nrTel : string,
    parola : string,

}
export interface infoInterface {
    idInfo:number,
    idAnimal:number,
    stare:string,
    detalii:string
}
export interface doctorInterface {
    idDoctor : number,
    feedback : [],
    utilizator : utilizatorInterface,
    d2a : doctori2animaleInterface[],
    animale: animaleInterface[]

}