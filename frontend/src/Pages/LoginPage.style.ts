import React from 'react';
import imagB from "./LoginFundal.png";
import * as url from "url";
import {styled as popstyle} from "@mui/system";
import {Button, css} from "@mui/material";
import styled from "styled-components";

export const LoginContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 228, 181, 0.9)',
    padding: '30px',
    borderRadius: '20px', // Adjust the border radius to your liking
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)', // Adjust the box shadow for diffusion
    width: '300px',
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

export const TextInput: React.CSSProperties = {
    marginBottom: '10px',
    width: '300px',
    padding: '10px',
    fontSize: '2rem',
    // Add other text input styles as needed
};
export const TitluApp: React.CSSProperties = {
    color: 'red',
    marginTop: -1,
    fontSize: '2rem',  // Adjust the font size as needed
    padding: '10px',   // Add padding for space around the title
};
export const MainStyle: React.CSSProperties = {
    backgroundImage: `url(${imagB})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
    alignItems: 'center',  // Center vertically
    marginTop: '0px', // Adjust the top margin as needed
    opacity: 0.8,  // Adjust the opacity to your preference
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)',  // Add a subtle box shadow
};
export const ButonConect: React.CSSProperties = {
    backgroundColor: 'tan',
    color: 'black',
    fontSize: '1.2rem',
    marginLeft: 2,  // Adjust the font size as needed
    padding: '8px 15px',  // Add padding for a more comfortable button
    transition: 'background-color 0.3s ease',  // Add a transition for a smoother effect
    // Define :hover inside the object
    width: 350,
};
export const ButonHome: React.CSSProperties = {
    position:'absolute',
    top:470,
    left: 565,
    backgroundColor: 'tan',
    color: 'black',
    fontSize: '1.2rem',
    marginLeft: 2,  // Adjust the font size as needed
    padding: '8px 15px',  // Add padding for a more comfortable button
    transition: 'background-color 0.3s ease',  // Add a transition for a smoother effect
    // Define :hover inside the object
    width: 350,
};
export const LogoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 228, 181, 0.9)',
    padding: '20px',
    borderRadius: '0px', // Adjust the border radius to your liking
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)', // Adjust the box shadow for diffusion
    width: '100px',
    maxWidth:'800px',
    height:'1100px',
    position: 'absolute',
    top: '20%',
    left: '82%',
    transform: 'translate(-50%, -50%)',
    opacity:0.7
};
export const PStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#333',  // Dark text color
    margin: '0 0 0px',  // 0 pentru margin-top și margin-right, 15px pentru margin-bottom, 0 pentru margin-left
};

export const SlideImage = {
    width: '72%',  // Adjust the width as needed
    height: 'auto',  // Maintain aspect ratio
    // Add other styles as needed
};

export const PrevNextButton = styled.div`
  position: absolute;
  top: 50%;
  left:30%;
  width: auto;
  padding: 16px;
  opacity: 0.5;
  background-color: #f1f1f1;
  /* Add other styles as needed */
`;

export const PrevButton = {
    left: 0,
    // Add other styles as needed
};

export const NextButton = {
    right: 0,
    // Add other styles as needed
};
export const SlideshowContainer: React.CSSProperties = {
    // Slideshow container styles
    display: 'flex',
    flexDirection: 'row',  // Set the appropriate value for flexDirection
    width: '100%',  // Adjust as needed
    borderRadius:'10px',

};



export const styleM = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
};
const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

export const ModalButton = popstyle(Button)(
    ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${
        theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
    }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${blue[500]};
    }
  }
`,
);



export const ModalContent = popstyle('div')(
    ({ theme }) => css`
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
      text-align: start;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: hidden;
      background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border-radius: 8px;
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
      padding: 24px;
      color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};
    `
);
