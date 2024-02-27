import React from "react";
import echipa from "./echipa1.png";
import animale from "./animale.jpeg";

export const MainStyle: React.CSSProperties = {
    height: '50vh',
    width: '100%',
    display: 'flow',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',  // Adaugă umbra textului
};
export const AboutUsTitleStyle: React.CSSProperties = {
    fontSize: '5rem',
    fontWeight: 'bold',
    color: 'oldlace',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: '20px',
    marginLeft:'500px',
    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.8)', // Adăugați umbra textului
};
export const VisionTitleStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
    // marginTop: '30px',
    // marginLeft:'20px',
};
export const EchipaContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${echipa})`,
    backgroundSize:'1500px',
    padding: '200px',
    borderRadius: '2px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.9)',
    maxWidth: '1800px',
    marginTop: '0px',
    marginLeft: '0px', // Setează la auto pentru a centra pe orizontală
    marginRight: 'auto', // Setează la auto pentru a centra pe orizontală
    opacity: 0.9
};
export const ParagraphStyle: React.CSSProperties = {
    fontSize: '1.3rem',
    lineHeight: '1.6',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    marginBottom: '5px',
    padding: '1px', // Add padding for a blog-like feel
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Add a light background color
    borderRadius: '2px', // Add rounded corners for a softer look
    marginLeft: '0px',
    marginRight: '0px',
};
