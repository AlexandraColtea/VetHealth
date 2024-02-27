import React from "react";
import imagB from "./Lanimale.jpeg";
export const MainStyle: React.CSSProperties ={
    backgroundImage: `url(${imagB})`,
    backgroundSize: 'cover',
    height: '100vh',
    padding:'0px',
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
    left: 65,
    top: 55,
    bottom:20,
    height: 50,
    padding: '20px 20px', // Ajustează spațiile dintre text și marginile butonului
    backgroundColor: 'gray', // Culoare de fundal verde
    color: 'whitesmoke', // Culoare text alb
    border: 'none', // Elimină bordura butonului
    borderRadius: '5px', // Adaugă colțuri rotunjite
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adaugă o umbra subtilă
    cursor: 'pointer', // Indică faptul că butonul este interactiv
    fontSize: '1rem', // Mărimea fontului
    fontWeight: 'bold', // Textul bold
    transition: 'background-color 0.3s ease', // Efect de tranziție la schimbarea culorii de fundal
};
export const UpdateAdminAccButtonStyle: React.CSSProperties = {
    position: "absolute",
    left: 65,
    top: 110,
    padding: '10px 20px', // Ajustează spațiile dintre text și marginile butonului
    backgroundColor: 'gray', // Culoare de fundal verde
    color: 'whitesmoke', // Culoare text alb
    border: 'none', // Elimină bordura butonului
    borderRadius: '5px', // Adaugă colțuri rotunjite
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adaugă o umbra subtilă
    cursor: 'pointer', // Indică faptul că butonul este interactiv
    fontSize: '1rem', // Mărimea fontului
    fontWeight: 'bold', // Textul bold
    transition: 'background-color 0.3s ease', // Efect de tranziție la schimbarea culorii de fundal
};
export const UpdateDoctorAccButtonStyle: React.CSSProperties = {
    position: "absolute",
    left: 65,
    top: 165,
    padding: '10px 20px', // Ajustează spațiile dintre text și marginile butonului
    backgroundColor: 'gray', // Culoare de fundal verde
    color: 'whitesmoke', // Culoare text alb
    border: 'none', // Elimină bordura butonului
    borderRadius: '5px', // Adaugă colțuri rotunjite
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adaugă o umbra subtilă
    cursor: 'pointer', // Indică faptul că butonul este interactiv
    fontSize: '1rem', // Mărimea fontului
    fontWeight: 'bold', // Textul bold
    transition: 'background-color 0.3s ease', // Efect de tranziție la schimbarea culorii de fundal
};
export const UpdatePacientAccButtonStyle: React.CSSProperties = {
    position: "absolute",
    left: 65,
    top: 220,
    padding: '10px 20px', // Ajustează spațiile dintre text și marginile butonului
    backgroundColor: 'gray', // Culoare de fundal verde
    color: 'whitesmoke', // Culoare text alb
    border: 'none', // Elimină bordura butonului
    borderRadius: '5px', // Adaugă colțuri rotunjite
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adaugă o umbra subtilă
    cursor: 'pointer', // Indică faptul că butonul este interactiv
    fontSize: '1rem', // Mărimea fontului
    fontWeight: 'bold', // Textul bold
    transition: 'background-color 0.3s ease', // Efect de tranziție la schimbarea culorii de fundal
};
export const AddVoucherButtonStyle: React.CSSProperties = {
    position: "absolute",
    left: 65,
    top: 275,
    padding: '10px 20px', // Ajustează spațiile dintre text și marginile butonului
    backgroundColor: 'gray', // Culoare de fundal verde
    color: 'whitesmoke', // Culoare text alb
    border: 'none', // Elimină bordura butonului
    borderRadius: '5px', // Adaugă colțuri rotunjite
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adaugă o umbra subtilă
    cursor: 'pointer', // Indică faptul că butonul este interactiv
    fontSize: '1rem', // Mărimea fontului
    fontWeight: 'bold', // Textul bold
    transition: 'background-color 0.3s ease', // Efect de tranziție la schimbarea culorii de fundal
};
export const LogoutButtonStyle: React.CSSProperties = {
    position: "absolute",
    left: 65,
    top: 1,
    padding: '10px 20px', // Ajustează spațiile dintre text și marginile butonului
    backgroundColor: 'gray', // Culoare de fundal verde
    color: 'whitesmoke', // Culoare text alb
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
