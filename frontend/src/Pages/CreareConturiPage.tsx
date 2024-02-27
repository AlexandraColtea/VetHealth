import React, { useEffect } from 'react';
import { ContainerCreateContPacient, MainStyle,} from "./CreareConturiPage.styles";
import axios from "axios";
import {ContainerCreateContDoctor, ContainerSignIn, SignButtonStyle} from "./CreareConturiPage.styles";
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
export const CreareConturiPage = (): JSX.Element => {
    const navigate=useNavigate();
    const [nume, setNume ]= React.useState("");
    const [prenume, setPrenume ]= React.useState("");
    const [adresa, setAdresa ]= React.useState("");
    const [email, setEmail ]= React.useState("");
    const [nrTel, setNrTel ]= React.useState("");
    const [parola, setParola ]= React.useState("");

    const [numeD, setNumeD ]= React.useState("");
    const [prenumeD, setPrenumeD ]= React.useState("");
    const [adresaD, setAdresaD ]= React.useState("");
    const [emailD, setEmailD ]= React.useState("");
    const [nrTelD, setNrTelD ]= React.useState("");
    const [parolaD, setParolaD ]= React.useState("");
    const [specializareD, setSpecializareD ]= React.useState("");

    const [numeP, setNumeP ]= React.useState("");
    const [prenumeP, setPrenumeP ]= React.useState("");
    const [adresaP, setAdresaP ]= React.useState("");
    const [emailP, setEmailP ]= React.useState("");
    const [nrTelP, setNrTelP ]= React.useState("");
    const [parolaP, setParolaP ]= React.useState("");
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

    const handleChangeNumeD =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNumeD(event.target.value);
    }
    const handleChangePrenumeD =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setPrenumeD(event.target.value);
    }

    const handleChangeAdresaD =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setAdresaD(event.target.value);
    }
    const handleChangeEmailD =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setEmailD(event.target.value);
    }
    const handleChangeNrTelD =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNrTelD(event.target.value);
    }
    const handleChangeParolaD =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setParolaD(event.target.value);
    }
    const handleChangeSpecializareD =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setSpecializareD(event.target.value);
    }

    const handleChangeNumeP =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNumeP(event.target.value);
    }
    const handleChangePrenumeP =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setPrenumeP(event.target.value);
    }

    const handleChangeAdresaP =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setAdresaP(event.target.value);
    }
    const handleChangeEmailP =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setEmailP(event.target.value);
    }
    const handleChangeNrTelP =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNrTelP(event.target.value);
    }
    const handleChangeParolaP =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setParolaP(event.target.value);
    }
    const handleBackClick=()=>{
        navigate("/AdminPage");
    }
    const handleClick =()=> {
        //obiect
        const signin={
            nume:nume,
            prenume:prenume,
            adresa:adresa,
            email:email ,
            nrTel:nrTel,
            parola:parola
        }
        //request post
        axios.post("http://localhost:8081/Admin/CreateCont", signin, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            // elena a dat return response, si eu am selectatsa se afuseze doar data
            if(response.data.idAdmin){
                console.log(response.data);
                setNume("");
                setPrenume("");
                setAdresa("");
                setEmail("");
                setNrTel("");
                setParola("");
            }
            else{
                console.error("the admin account can't be created");
            }
        })

    }
    const handleDoctorClick =()=> {
        //obiect
        const createD={
            nume:numeD,
            prenume:prenumeD,
            adresa:adresaD,
            email:emailD ,
            nrTel:nrTelD,
            parola:parolaD,
            specializare:specializareD
        }
        //request post
        axios.post("http://localhost:8081/Doctor/CreareContDoctor", createD, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            // elena a dat return response, si eu am selectatsa se afuseze doar data
            if(response.data.idDoctor){
                console.log(response.data);
                setNumeD("");
                setPrenumeD("");
                setAdresaD("");
                setEmailD("");
                setNrTelD("");
                setParolaD("");
                setSpecializareD("");
            }
            else{
                console.error("the doctor account can't be created");
            }
        })

    }
    const handlePacientClick =()=> {
        //obiect
        const createP={
            nume:numeP,
            prenume:prenumeP,
            adresa:adresaP,
            email:emailP ,
            nrTel:nrTelP,
            parola:parolaP,
        }
        //request post
        axios.post("http://localhost:8081/Pacient/CreateCont", createP, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            // elena a dat return response, si eu am selectatsa se afuseze doar data
            if(response.data.idPacient){
                console.log(response.data);
                setNumeP("");
                setPrenumeP("");
                setAdresaP("");
                setEmailP("");
                setNrTelP("");
                setParolaP("");
            }
            else{
                console.error("the pacient account can't be created");
            }
        })

    }
    return (
        <div style={MainStyle}>
            <div style={{ ...ContainerSignIn, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Create an Admin Account</p>
                <TextField id="nume" label="Nume" variant="outlined" value={nume} onChange={handleChangeNume} />
                <TextField id="prenume" label="Prenume" variant="outlined" value={prenume} onChange={handleChangePrenume} />
                <TextField id="adresa" label="Adresa" variant="outlined" value={adresa} onChange={handleChangeAdresa} />
                <TextField id="email" label="Email" variant="outlined" value={email} onChange={handleChangeEmail} />
                <TextField id="nrTel" label="NrTel" variant="outlined" value={nrTel} onChange={handleChangeNrTel} />
                <TextField id="parola" label="Parola" variant="outlined" value={parola} onChange={handleChangeParola} />
                <Button style={SignButtonStyle} onClick={handleClick}>Create</Button>
            </div>
            <div style={{ ...ContainerCreateContDoctor, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Create a Doctor Account</p>
                <TextField id="nume" label="Nume" variant="outlined" value={numeD} onChange={handleChangeNumeD} />
                <TextField id="prenume" label="Prenume" variant="outlined" value={prenumeD} onChange={handleChangePrenumeD} />
                <TextField id="adresa" label="Adresa" variant="outlined" value={adresaD} onChange={handleChangeAdresaD} />
                <TextField id="email" label="Email" variant="outlined" value={emailD} onChange={handleChangeEmailD} />
                <TextField id="nrTel" label="NrTel" variant="outlined" value={nrTelD} onChange={handleChangeNrTelD} />
                <TextField id="parola" label="Parola" variant="outlined" value={parolaD} onChange={handleChangeParolaD} />
                <TextField id="specializare" label="Specializare" variant="outlined" value={specializareD} onChange={handleChangeSpecializareD} />
                <Button style={SignButtonStyle} onClick={handleDoctorClick}>Create</Button>
            </div>
            <div style={{ ...ContainerCreateContPacient, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Create a Pacient Account</p>
                <TextField id="nume" label="Nume" variant="outlined" value={numeP} onChange={handleChangeNumeP} />
                <TextField id="prenume" label="Prenume" variant="outlined" value={prenumeP} onChange={handleChangePrenumeP} />
                <TextField id="adresa" label="Adresa" variant="outlined" value={adresaP} onChange={handleChangeAdresaP} />
                <TextField id="email" label="Email" variant="outlined" value={emailP} onChange={handleChangeEmailP} />
                <TextField id="nrTel" label="NrTel" variant="outlined" value={nrTelP} onChange={handleChangeNrTelP} />
                <TextField id="parola" label="Parola" variant="outlined" value={parolaP} onChange={handleChangeParolaP} />
                <Button style={SignButtonStyle} onClick={handlePacientClick}>Create</Button>
            </div>
        </div>
    );

};