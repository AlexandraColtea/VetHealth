import React from 'react';
import imagB from "./PacientP.jpeg";

export const parentDivStyle: React.CSSProperties ={
    position: "absolute",
    left:600,
    top:150,
}

export const addButtonStyle: React.CSSProperties ={
    position: "relative",
    left:30,
    top:20,
    fontSize:20,
    color:"black",
    backgroundColor: 'whitesmoke'

}

export const addLabel:React.CSSProperties ={
    position: "relative",
    left:0,
    fontSize:20,
    fontFamily:"Times New Roman"
}

export const MainStyle: React.CSSProperties ={
    backgroundImage: `url(${imagB})`,
    backgroundSize: 'cover',
    height: '100vh',
    width:'100%'
}