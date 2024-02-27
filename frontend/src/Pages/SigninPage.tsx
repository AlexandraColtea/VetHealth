import React from 'react';

import {Button, Modal, Stack, TextField} from "@mui/material";

import axios from "axios";
import {ContainerSignIn, SignButtonStyle, SignMainStyle} from "./SigninPage.styles";
import {ModalButton, ModalContent, styleM} from "./LoginPage.style";
import {useNavigate} from "react-router-dom";



export const SigninPage = (): JSX.Element => {
    const navigate=useNavigate();
    const [nume, setNume ]= React.useState("");
    const [prenume, setPrenume ]= React.useState("");
    const [adresa, setAdresa ]= React.useState("");
    const [email, setEmail ]= React.useState("");
    const [nrTel, setNrTel ]= React.useState("");
    const [parola, setParola ]= React.useState("");
    // se pune in mail/pass ce se scrie in text field
    const handleChangeNume =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNume(event.target.value);
    }
    const handleChangePrenume =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setPrenume(event.target.value);
    }

    const handleChangeAdresa =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setAdresa(event.target.value);
    }
    const handleChangeEmail =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setEmail(event.target.value);
    }
    const handleChangeNrTel =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNrTel(event.target.value);
    }
    const handleChangeParola =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setParola(event.target.value);
    }

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        setOpen2(false);
    };
    const handleClick =()=> {
        //obiect
        if(nume!="" && prenume!="" && adresa!="" && email!="" && nrTel!="" && parola!="") {
            const signin = {
                nume: nume,
                prenume: prenume,
                adresa: adresa,
                email: email,
                nrTel: nrTel,
                parola: parola
            }
            //request post
            axios.post("http://localhost:8081/Pacient/CreateCont", signin, {
                headers: {
                    "content-type": "application/json"
                }
            }).then((response: any) => {
                console.log(response.data) // elena a dat return response, si eu am selectatsa se afuseze doar data
                if (response.data) {
                    navigate("/PacientPage", { state: { key: response.data.utilizator.utilizatorId } });
                    setOpen(true);
                }
            }).catch((responseError: any) => {
                console.error("Error find any insertion with these ids:", responseError);
                setOpen2(true);
            });
        }
        else {setOpen2(true);}
    }
    return <div style={SignMainStyle}>
        <div style={{ ...ContainerSignIn, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Create an Account</p>

            <div style={{ marginTop: 5 }}>
                <TextField id="nume" label="Nume" variant="outlined" value={nume} onChange={handleChangeNume}/>
            </div>
            <div style={{ marginTop: 5 }}>
                <TextField id="prenume" label="Prenume" variant="outlined" value={prenume} onChange={handleChangePrenume}/>
            </div>
            <div style={{ marginTop: 5 }}>
                <TextField id="adresa" label="Adresa" variant="outlined" value={adresa} onChange={handleChangeAdresa}/>
            </div>
            <div style={{ marginTop: 5 }}>
                <TextField id="email" label="Email" variant="outlined" value={email} onChange={handleChangeEmail}/>
            </div>
            <div style={{ marginTop: 5 }}>
                <TextField id="nrTel" label="NrTel" variant="outlined" value={nrTel} onChange={handleChangeNrTel}/>
            </div>
            <div style={{ marginTop: 5 }}>
                <TextField id="parola" label="Parola" variant="outlined" value={parola} onChange={handleChangeParola} />
            </div>
            <React.Fragment>
                <ModalButton style={SignButtonStyle} onClick={handleClick} variant="contained">SignIn</ModalButton>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <ModalContent sx={[styleM, { width: '240px' }]}>
                        <h2>
                            Sign in was succesfull
                        </h2>
                        <ModalButton onClick={handleClose}>Close</ModalButton>
                    </ModalContent>
                </Modal>

                <Modal
                    open={open2}
                    onClose={handleClose}
                >
                    <ModalContent sx={[styleM, { width: '240px' }]}>
                        <h2>
                            Something is not right. Either you do not have permission to create an account, or you have not filled in the data correctly
                        </h2>
                        <ModalButton onClick={handleClose}>Close</ModalButton>
                    </ModalContent>
                </Modal>
            </React.Fragment>
        </div>
    </div>
}