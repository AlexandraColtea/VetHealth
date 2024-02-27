import React from 'react';
import imagB from "./PacientPageImg.jpg";
export const MainStyle: React.CSSProperties ={
    backgroundImage: `url(${imagB})`,
    backgroundSize: 'cover',
    height: '100vh',
    width:'100%'
}
export const openButtonStyle: React.CSSProperties ={
    position: "absolute",
    marginLeft:680,
    marginTop:630,
    fontSize:20,
    color:"black",
    backgroundColor: 'beige'
}
export interface animalInterface {
    idAnimal : number,
    nume : string,
    rasa : string,
    varsta : number,
    sex : string,
    steril : string,
    nrCip : string,
    tipAnimal: string

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
export interface d2aInterface {
    idDoc2Animal: number,
    idDoctor: number,
    idAnimal:number,
    mesaje:string[]
}
export interface doctorInterface {
    idDoctor : number,
    specializare: string,
    feedback : string[],
    utilizator : utilizatorInterface,
    d2a : d2aInterface[],
}
export const ContainerSignIn: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '750px',
    height: '100vh',
    maxHeight: '670px',
    marginTop: '0px',
    marginLeft: '300px',
    opacity: '0.9', // Opacitate crescută
    backgroundColor: 'white', // Culoare albă
    borderColor: 'dimgray',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Umbra sub container
    transition: 'opacity 0.3s ease-in-out', // Efect de tranziție pentru opacitate
};