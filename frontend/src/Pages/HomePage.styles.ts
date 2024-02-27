// import React from "react";
// import imagB from "./B_Hp.jpeg";
// export const TitluApp : React.CSSProperties ={
//  color: "red",
//  marginTop: -1
// }
// export const MainStyle: React.CSSProperties ={
//  backgroundImage: `url(${imagB})`,
//  backgroundSize: 'cover',
//  height: '100vh',
//  width:'100%'
// }
//
// export const ButtonStyle: React.CSSProperties ={
//  color: "deepskyblue",
//  width: 350,
//  backgroundColor: "aliceblue",
//  marginLeft: 2
// }
// export const StackStyle: React.CSSProperties ={
//  backgroundColor: "blue"
// }
import React from "react";
import imagB from "./B_Hp.jpeg";
import logo from "./logo.png";
import animale from "./animale.jpeg";
export const TitluApp: React.CSSProperties = {
 color: "red",
 marginTop: -1,
 fontSize: '2rem',  // Increase the font size
 fontWeight: 'bold',  // Add bold font weight
 textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',  // Add a subtle text shadow
};

export const MainStyle: React.CSSProperties = {
 backgroundImage: `url(${imagB})`,
 backgroundSize: 'cover',
 height: '100vh',
 width: '100%',
 opacity: 0.9,
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'center',
// justifyContent: 'center',
 padding: '0px',
 //filter: 'blur(4px)',  // Apply a blur effect to the background
};

export const ButtonStyle: React.CSSProperties = {
 color: "white",
 width: 200,
 backgroundColor: 'peru',  // Use a translucent orange color
 border: 'none',  // Remove button border
 borderRadius: '8px',  // Add rounded corners
 padding: '15px',  // Increase padding for a larger button
 fontSize: '1.2rem',  // Increase font size
 cursor: 'pointer',  // Change cursor on hover
 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)',  // Add a subtle box shadow
 transition: 'background-color 0.3s',  // Add a smooth transition effect
};

export const ButtonLogIn: React.CSSProperties = {
 color: "white",
 width: 400,
 marginTop:'-50px',
 backgroundColor: 'saddlebrown',  // Use a translucent orange color
 border: 'none',  // Remove button border
 borderRadius: '20px',  // Add rounded corners
 padding: '15px',  // Increase padding for a larger button
 fontSize: '1.8rem',  // Increase font size
 cursor: 'pointer',  // Change cursor on hover
 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)',  // Add a subtle box shadow
 transition: 'background-color 1s',  // Add a smooth transition effect
 opacity:1,
};
export const ButtonSearch: React.CSSProperties = {
 color: "white",
 width: 150,
 backgroundColor: 'peru',  // Use a translucent orange color
 border: 'none',  // Remove button border
 borderRadius: '20px',  // Add rounded corners
 padding: '15px',  // Increase padding for a larger button
 fontSize: '1.2rem',  // Increase font size
 cursor: 'pointer',  // Change cursor on hover
 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)',  // Add a subtle box shadow
 transition: 'background-color 1s',  // Add a smooth transition effect
 opacity:1,
};

export const ButtonClose: React.CSSProperties = {
 color: "black",
 width: 20,
 backgroundColor: 'tan',  // Use a translucent orange color
 border: 'none',  // Remove button border
 borderRadius: '2px',  // Add rounded corners
 padding: '3px',  // Increase padding for a larger button
 fontSize: '0.8rem',  // Increase font size
 cursor: 'pointer',  // Change cursor on hover
 boxShadow: '0 4px 8px peru',  // Add a subtle box shadow
 transition: 'background-color 1s',  // Add a smooth transition effect
 opacity:1,
 marginLeft:'10px'
};


export const StackStyle: React.CSSProperties = {
 display: 'flow',
 flexDirection: 'row',  // Arrange buttons horizontally
 alignItems: 'left',  // Align buttons at the top
 backgroundColor: "rgba(210, 180, 140, 0.9)",
 padding: '10px',
 borderRadius: '0px',
 boxShadow: '0 0 15px rgba(0, 0, 0, 0.9)',
 marginRight:'0px',
 marginLeft:'0px',
 maxWidth:'1408px',
 // opacity:0.8
};

export const ListaContainerStyle: React.CSSProperties = {
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'flex-start',  // Așezați la stânga
 justifyContent: 'flex-start',  // Așezați la început
 backgroundColor: "rgba(255, 228, 181, 0.9)",
 padding: '20px',
 borderRadius: '10px',
 boxShadow: '0 0 15px rgba(0, 0, 0, 0.9)',
 margin: '20px',  // Spațiu între lista și restul conținutului
 maxWidth: '400px',
 marginLeft: '30px',  // Spațiu între container și marginea stângă a paginii
 marginRight: 'auto',  // Poziționați la stânga și lăsați spațiu la dreapta
};
export const LogoContainerStyle: React.CSSProperties = {
 display: 'flex',
 width:'65%',
 height:'70%',
 flexDirection: 'column',
 alignItems: 'center',
 justifyContent: 'center',
 backgroundImage: `url(${animale})`,
 backgroundSize:'720px',
 padding: '10px',
 borderRadius: '0px',
 // boxShadow: '0 0 15px rgba(0, 0, 0, 0.9)',
 maxWidth: '950px',
 maxHeight:'500px',
 marginTop: '-500px',
 marginLeft: '450px', // Setează la auto pentru a centra pe orizontală
 marginRight: '-10px', // Setează la auto pentru a centra pe orizontală
 opacity: 0.7
};

export const BlogParagraphStyle: React.CSSProperties = {
 fontSize: '1.1rem',
 lineHeight: '1.6',
 color: '#333',  // Dark text color
 margin: '0 0 15px',  // 0 pentru margin-top și margin-right, 15px pentru margin-bottom, 0 pentru margin-left
};

export const SearchOverlayStyle: React.CSSProperties = {
 position: 'fixed',
 top: 0,
 left: 0,
 width: '100%',
 height: '100%',
 background: 'rgba(0, 0, 0, 0.7)', // Opacity 0.7
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 zIndex: 1000, // Ensure the container is displayed above other elements
 backdropFilter: 'blur(5px)', // Apply a blur effect to the background
 transition: 'background 0.3s ease-in-out', // Smooth background transition
};

// Stilizare pentru lista de rezultate
export const SearchResultsStyle: React.CSSProperties = {
 listStyle: 'none',
 padding: 20,
 margin: 0,
 color: 'black',
 borderRadius: 8,
 boxShadow: '0 4px 8px tan',
 background: 'linear-gradient(45deg, tan, tan)',
};

export const InfoParagraphStyle: React.CSSProperties = {
 fontSize: '1.1rem',
 lineHeight: '1.6',
 color: '#333',  // Dark text color
 margin: '10px 0 15px',  // 0 pentru margin-top și margin-right, 15px pentru margin-bottom, 0 pentru margin-left
 fontWeight: 'bold',
};
