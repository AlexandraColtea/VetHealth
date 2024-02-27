
import React,{useState} from 'react';

import {Button, css, Modal, TextField} from "@mui/material";
import {
    MainStyle,
    ButonConect,
    LoginContainer,
    TextInput,
    styleM,
    ModalButton,
    ModalContent,
    SlideshowContainer, PrevNextButton, SlideImage, LogoStyle, PStyle, ButonHome
} from "./LoginPage.style";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Unstable_Popup as BasePopup} from "@mui/base/Unstable_Popup";
import {styled} from "@mui/system";
import {grey} from "@mui/material/colors";
import { Modal as BaseModal } from '@mui/base/Modal';

import imag2 from "./imag1.jpeg";
import imag1 from "./imag2.jpeg";
import imag3 from "./imag3.jpeg";
import imag4 from "./imag4.jpeg";
import imag5 from "./imag5.jpeg";
import logo from "./logo.png";

export const LoginPage = (): JSX.Element => {
    const [email, setEmail ]= React.useState("");
    const [pass, setPass ]= React.useState("");
    // se pune in mail/pass ce se scrie in text field
    const navigate = useNavigate();
    const handleChangeEmail =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setEmail(event.target.value);
    }
    const handleChangePass =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setPass(event.target.value);
    }
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleClick =()=> {
        //obiect
        const login={
            email:email ,
            parola:pass
        }
        //request post
        axios.post("http://localhost:8081/Utilizator/GetByEmailAndParola2", login, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            console.log(response.data) // elena a dat return response, si eu am selectatsa se afuseze doar data
            if(response.data==""){setOpen(true);}
            else {
                const isDoctorEmail = response.data.email.endsWith("@doctor.vetcj");
                const adminEmails = ["elena.hadarau@yahoo.com", "ioanahad03@gmail.com", "alexandracoltea002@gmail.com"];
                const isAdminEmail = adminEmails.includes(response.data.email);
                // Navighează în funcție de formatul adresei de email
                if(isAdminEmail){
                    navigate("/AdminPage", { state: { key: response.data.utilizatorId } });
                }else{
                    if (isDoctorEmail) {
                        navigate("/DoctorPage", {state: {key: response.data.utilizatorId}});
                    } else{
                        navigate("/PacientPage", {state: {key: response.data.utilizatorId}});
                    }}
            }
        })
    }

    const handleSignClick=()=> {
        navigate("/SigninPage");
    }
    const handleClickHome=()=> {
        navigate("/HomePage");
    }
    const welcomeMessages = [
        "Welcome back!",
        "Hello there!",
        "Great to see you!",
        "Login to your account",
        "Welcome back! It's great to see you again.",
        "Hello there! Ready to explore and connect?",
        "Login to your account and dive into a world of possibilities!",
        "Greetings! Your journey begins here.",
        "Good to have you back! Let's get started.",
        "Welcome! Securely access your account.",
        "Hi there! Ready for another session?",
        "Great to see you! Securely log in and continue your experience.",
        "Welcome aboard! Your next adventure awaits.",
        "Hello! Login to unlock personalized features."
    ];

    const randomWelcomeMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

    const Slideshow: React.FC = () => {
        const [currentSlide, setCurrentSlide] = useState(0);

        const plusSlides = (increment: number) => {
            const totalSlides = 5;
            let newSlide = currentSlide + increment;

            if (newSlide < 0) {
                newSlide = totalSlides - 1;
            } else if (newSlide >= totalSlides) {
                newSlide = 0;
            }

            setCurrentSlide(newSlide);
        };

        const slides = [imag1, imag2, imag3, imag4, imag5];
        return (
            <div style={{...SlideshowContainer, left:'50%'}}>
                <div style={{ display: 'block' }}>
                    <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} style={SlideImage} />
                </div>

                <PrevNextButton>
                    <a onClick={() => plusSlides(-1)}>&#10094;</a>
                    <a onClick={() => plusSlides(1)}>&#10095;</a>
                </PrevNextButton>
            </div>
        );
    };

    return <div style={MainStyle}>
        <div style={LoginContainer}>
            <h2>{randomWelcomeMessage}</h2>
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleChangeEmail}
                style={TextInput}
            />

            <TextField
                id="pass"
                label="Password"
                variant="outlined"
                value={pass}
                onChange={handleChangePass}
                style={TextInput}
            />

            <React.Fragment>
                <Button
                    onClick={handleClick}
                    sx={{
                        ...ButonConect,
                        width: '300px',  // Adjust the width to match TextField
                        marginTop: '10px',
                    }}
                >
                    Connect
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <ModalContent sx={[styleM, { width: '240px' }]}>
                        <h2>
                            Incorrect email or password
                        </h2>
                        <ModalButton onClick={handleClose}>Close</ModalButton>
                    </ModalContent>
                </Modal>
            </React.Fragment>

            <div style={{ marginTop: '10px' }}>
                Don't have an account?
                <Button color="primary" onClick={handleSignClick}>
                    Sign In
                </Button>
            </div>
        </div>
        <div style={{ ...LogoStyle, marginLeft: '20px', width: '30%' }}>
            <div>
                <img src={logo} alt="Imagine Descriptivă" style={{ maxWidth: '60%', marginTop: '400px',marginLeft:'80px', borderRadius: '30px', padding: '20px' }} />
                <p style={{ ...PStyle, marginLeft: '0px', textAlign: 'center', fontWeight: 'bold' }}>
                    VetHealth{' '}
                </p>
                <p style={{ ...PStyle, marginLeft: '0px', textAlign: 'left' }}>
                    este o aplicație inovatoare care conectează doctorii veterinari și proprietarii de animale cu mai multe funcționalități utile. Utilizatorii pot gestiona profiluri personalizate pentru fiecare animal de companie, comunica direct prin chat securizat, primi notificări și sfaturi pentru îngrijirea animalelor, accesa istoricul medical și dosarele electronice, precum și beneficia de vouchere pentru analize. Scopul aplicației este de a simplifica gestionarea sănătății animalelor și de a consolida colaborarea între profesioniștii veterinari și iubitorii de animale.{' '}
                </p>
            </div>
        </div>

        <div>
            <Slideshow />
        </div>
        <Button
            onClick={handleClickHome}
            sx={{
                ...ButonHome,
                width: '300px',  // Adjust the width to match TextField
                marginTop: '10px',
            }}
        >
            Back to Home Page
        </Button>
    </div>
}
