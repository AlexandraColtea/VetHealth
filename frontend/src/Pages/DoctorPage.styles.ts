import React from 'react';
import imagB from "./DocPageBack.png";
import {animaleInterface} from "./PacientPage.styles";

export interface utilizatorInterface {
    utilizatorId : number,
    nume : string,
    prenume : string,
    adresa : string,
    email : string,
    nrTel : string,
    parola : string,

}
export interface doctori2animaleInterface {

    idDoc2Animal : number
    doctor: doctorInterface,
    animal:animaleInterface
}
export interface doctorInterface {
    idDoctor : number,
    specializare:string,
    feedback : string[],
    utilizator : utilizatorInterface,
    d2a : doctori2animaleInterface[],
    animale: animaleInterface[]

}
export const MainStyle: React.CSSProperties ={
    backgroundImage: `url(${imagB})`,
    backgroundSize: 'cover',
    height: '98vh',
    padding:'0px',
    width: '100%',
    alignItems: 'center',  // Center vertically
    marginTop: '-1px', // Adjust the top margin as needed
    // opacity: 0.7,  // Adjust the opacity to your preference
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)',  // Add a subtle box shadow
}
export const parentDivStyle: React.CSSProperties ={
    position: "absolute",
    left:0,
    top:100,

}
export const updateButtonStyle: React.CSSProperties ={
    position: "relative",
    left:0,
    top:10,
    fontSize:20,
    color:"black",
    backgroundColor: 'beige'
}
export const parent2DivStyle: React.CSSProperties ={
    position: "absolute",
    left:50,
    top:110,
}
export const parent3DivStyle: React.CSSProperties ={
    position: "absolute",
    left:370,
    top:320,

}
export const selectButtonStyle: React.CSSProperties ={
    position: "absolute",
    left:870,
    top:65,
    fontSize:15,
    color:"black",
    backgroundColor: 'beige'
}
export const insertButtonStyle: React.CSSProperties ={
    position: "absolute",
    left:500,
    top:55,
    fontSize:15,
    color:"black",
    backgroundColor: 'beige'
}
export const seeAnimalsButtonStyle: React.CSSProperties ={
    position: "absolute",
    left:1100,
    top:400,
    fontSize:20,
    color:"black",
    backgroundColor: 'beige'
}
export const ContainerSignIn: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '250px',
    height: '100vh',
    maxHeight: '600px',
    marginTop: '10px',
    marginLeft: '20px',
    opacity: '0.9', // Opacitate crescută
    backgroundColor: 'white', // Culoare albă
    borderColor: 'dimgray',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Umbra sub container
    transition: 'opacity 0.3s ease-in-out', // Efect de tranziție pentru opacitate
};
export const ContainerBoli: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '410px',
    height: '100vh',
    maxHeight: '600px',
    marginTop: '10px',
    marginLeft: '630px',
    opacity: '0.9', // Opacitate crescută
    backgroundColor: 'white', // Culoare albă
    borderColor: 'dimgray',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Umbra sub container
    transition: 'opacity 0.3s ease-in-out', // Efect de tranziție pentru opacitate
};
export const LogoutButtonStyle: React.CSSProperties = {
    position: "absolute",
    left: 35,
    top: 10,
    padding: '10px 20px', // Ajustează spațiile dintre text și marginile butonului
    backgroundColor: 'beige', // Culoare de fundal verde
    color: 'black', // Culoare text alb
    border: 'none', // Elimină bordura butonului
    borderRadius: '5px', // Adaugă colțuri rotunjite
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adaugă o umbra subtilă
    cursor: 'pointer', // Indică faptul că butonul este interactiv
    fontSize: '1rem', // Mărimea fontului
    fontWeight: 'bold', // Textul bold
    transition: 'background-color 0.3s ease', // Efect de tranziție la schimbarea culorii de fundal
};
export const updateLabel:React.CSSProperties ={
    position: "relative",
    left:100,
    top: 50,
    fontSize:40,
    fontFamily:"Times New Roman"
}
export const searchLabel:React.CSSProperties ={
    position: "relative",
    left:500,
    top: -60,
    fontSize:40,
    fontFamily:"Times New Roman"
}
export const illnessLabel:React.CSSProperties ={
    position: "relative",
    left:100,
    top: -50,
    fontSize:30,
    fontFamily:"Times New Roman"
}
export interface boalaInterface {
    descriereBoala:string

}
export const feedbackContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '300px',
    height: '100vh',
    maxHeight: '300px',
    marginTop: '-600px',
    marginLeft: '1100px',
    opacity: '0.7', // Opacitate crescută
    backgroundColor: 'white', // Culoare albă
    borderColor: 'dimgray',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Umbra sub container
    transition: 'opacity 0.3s ease-in-out', // Efect de tranziție pentru opacitate
};
export const myAnimalsLabel:React.CSSProperties ={
    // position: "relative",
    // top:50,
    // left:35,
    fontSize:40,
    fontFamily:"Times New Roman",
    marginTop:'10px',
    marginLeft:'50px',
    color:'black'
}
