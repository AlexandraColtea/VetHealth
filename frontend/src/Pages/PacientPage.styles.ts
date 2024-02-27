import React from 'react';
import imagB from "./PacientP.jpeg";
export interface utilizatorInterface {
    utilizatorId : number,
    nume : string,
    prenume : string,
    adresa : string,
    email : string,
    nrTel : string,
    parola : string,

}
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
// export const updateLabel:React.CSSProperties ={
//     // position: "relative",
//     // left:250,
//     // top: 50,
//     fontSize:40,
//     fontFamily:"Times New Roman",
//     marginLeft:'500px',
//     marginTop:'10px',
// }
export const nameLabel:React.CSSProperties ={
    position: "absolute",
    left:400,
    fontSize:20
    //fontFamily:"Times New Roman"
}
export const nameSearchLabel:React.CSSProperties ={
    position: "absolute",
    left:1140,
    fontSize:20,
    top: 125
    //fontFamily:"Times New Roman"
}

export const addNAnimalLabel:React.CSSProperties ={
    position: "absolute",
    left:1100,
    top: 450,
    fontSize:40,
    fontFamily:"Times New Roman"
}
export const searchTFieldstyle:React.CSSProperties ={
    position: "absolute",
    fontSize:20,
    // top: 115,
    //fontFamily:"Times New Roman"
}
export const selectAnimalLabel:React.CSSProperties ={
    position: "absolute",
    left:1150,
    top: 50,
    fontSize:40,
    fontFamily:"Times New Roman"
}
export const updateButtonStyle: React.CSSProperties ={
    position: "relative",
    left:30,
    top:30,
    fontSize:20,
    color:"black",
    backgroundColor: 'whitesmoke'
}
export const LogoutButtonStyle: React.CSSProperties = {
    position: "absolute",
    left: 65,
    top: 1,
    // left: 1100,
    // top: 507,
    fontSize: 20,
    color: "black",
    backgroundColor: 'whitesmoke', // A nice green color
    padding: '12px 25px',
    borderRadius: '8px',
    border: '2px solid #8B4513', // Darker green border
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};
// export const selectButtonStyle: React.CSSProperties ={
//     position: "absolute",
//     // left:1200,
//     fontSize:20,
//     color:"black",
//     backgroundColor: 'beige'
// }
// export const addNAnimalButtonStyle: React.CSSProperties ={
//     position: "absolute",
//     // left:1100,
//     // top:507,
//     fontSize:20,
//     color:"black",
//     backgroundColor: 'beige'
// // }
// export const selectButtonStyle: React.CSSProperties = {
//     position: "absolute",
//     // left: 1200,
//     fontSize: 20,
//     color: "white",
//     backgroundColor: 'peru', // A nice blue color
//     padding: '10px 20px',
//     borderRadius: '5px',
//     border: '2px solid #8B4513', // Darker blue border
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     // Add any additional styles you want
// }

export const AnimalButtonStyle: React.CSSProperties = {
    position: "absolute",
    // left: 1100,
    // top: 507,
    fontSize: 20,
    color: "black",
    backgroundColor: 'whitesmoke', // A nice green color
    padding: '12px 25px',
    borderRadius: '8px',
    border: '2px solid #8B4513', // Darker green border
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    // Add any additional styles you want
}
export interface animaleInterface {
    idAnimal : number,
    nume : string,
    rasa : string,
    sex : string,
    steril : string,
    nrCip : string,
    tipAnimal : string,
    idPacient:number
}
export interface pacientInterface {
    idPacient : number,
    utilizator : utilizatorInterface,
    animale : animaleInterface[],
}
export const parentDivStyle: React.CSSProperties ={
    position: "absolute",
    left:0,
    top:100,

}
export const MainStyle: React.CSSProperties ={
    backgroundImage: `url(${imagB})`,
    backgroundSize: 'cover',
    height: '100vh',
    width:'100%',
    marginTop:'-10px'
}
export const AnimalContainerStyle: React.CSSProperties = {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '50%',
    height: '80%',
    maxWidth: '400px',
    marginLeft: '20px',
    marginRight: 'auto',
    opacity: '0.7', // Opacitate crescută
    backgroundColor: 'gray',
    borderColor: 'dimgray',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Umbra sub container
    transition: 'opacity 0.3s ease-in-out', // Efect de tranziție pentru opacitate
};
export const ProfilContainerStyle: React.CSSProperties = {
    width: '25%', // Ajustați la necesități
    height: '80%',
    backgroundColor: 'gray',
    opacity: 0.7,
    padding: '20px', // Ajustați la necesități
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '0 auto', // Aceasta va centra containerul orizontal
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};
export const RightContainerStyle: React.CSSProperties = {
    width: '40%',
    height: '40%',
    backgroundColor: 'gray',
    opacity:0.7,
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    marginLeft: '1000px',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column', // sau 'row', în funcție de cerințe
    // alignItems: 'center',
    // justifyContent: 'center',
};