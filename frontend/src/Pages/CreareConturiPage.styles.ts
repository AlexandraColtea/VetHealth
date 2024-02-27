import React from 'react';
import imagB from "./B_Hp.jpeg";
export const MainStyle: React.CSSProperties ={
    backgroundImage: `url(${imagB})`,
    backgroundSize: 'cover',
    height: '100vh',
    padding:'10px',
    width: '100%',
    alignItems: 'center',  // Center vertically
    marginTop: '-1px', // Adjust the top margin as needed
    // opacity: 0.7,  // Adjust the opacity to your preference
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)',  // Add a subtle box shadow
}

export const pparentDivStyle: React.CSSProperties ={
    position: "relative",
    left:50
}
// export const SignMainStyle: React.CSSProperties = {
//     backgroundImage: `url(${sign})`,
//     backgroundSize: 'cover',
//     height: '100vh',
//     padding:'10px',
//     width: '100%',
//     alignItems: 'center',  // Center vertically
//     marginTop: '-1px', // Adjust the top margin as needed
//     // opacity: 0.7,  // Adjust the opacity to your preference
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)',  // Add a subtle box shadow
// };
export const SignButtonStyle: React.CSSProperties = {
    position: "relative",
    left: 55,
    top: 5,
    padding: '10px 20px', // Ajustează spațiile dintre text și marginile butonului
    backgroundColor: 'tan', // Culoare de fundal verde
    color: 'black', // Culoare text alb
    border: 'none', // Elimină bordura butonului
    borderRadius: '5px', // Adaugă colțuri rotunjite
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adaugă o umbra subtilă
    cursor: 'pointer', // Indică faptul că butonul este interactiv
    fontSize: '1rem', // Mărimea fontului
    fontWeight: 'bold', // Textul bold
    transition: 'background-color 0.3s ease', // Efect de tranziție la schimbarea culorii de fundal
};
export const ContainerSignIn: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '300px',
    height: '100vh',
    maxHeight: '400px',
    marginTop: '130px',
    marginLeft: '20px',
    opacity: '0.9', // Opacitate crescută
    backgroundColor: 'white', // Culoare albă
    borderColor: 'dimgray',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Umbra sub container
    transition: 'opacity 0.3s ease-in-out', // Efect de tranziție pentru opacitate
};
export const ContainerCreateContDoctor: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '300px',
    height: '100vh',
    maxHeight: '460px',
    marginTop: '-440px',
    marginLeft: '410px',
    opacity: '0.9', // Opacitate crescută
    backgroundColor: 'white', // Culoare albă
    borderColor: 'dimgray',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Umbra sub container
    transition: 'opacity 0.3s ease-in-out', // Efect de tranziție pentru opacitate
};
export const ContainerCreateContPacient: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '300px',
    height: '100vh',
    maxHeight: '400px',
    marginTop: '-500px',
    marginLeft: '810px',
    opacity: '0.9', // Opacitate crescută
    backgroundColor: 'white', // Culoare albă
    borderColor: 'dimgray',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Umbra sub container
    transition: 'opacity 0.3s ease-in-out', // Efect de tranziție pentru opacitate
};
