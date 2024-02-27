import React from 'react';

import {Button, Modal, Stack, TextField} from "@mui/material";

import axios from "axios";
import {MainStyle, parentDivStyle, addButtonStyle, addLabel} from "./AddAnimal.styles";
import {useLocation} from "react-router-dom";
import {ModalButton, ModalContent, styleM} from "./LoginPage.style";




export const AddAnimalPage = (): JSX.Element => {
    const location = useLocation();
    const pacientId = parseInt(location.state?.key, 10);


    const [nume, setNume ]= React.useState("");
    const [rasa, setRasa ]= React.useState("");
    const [varsta, setVarsta ]= React.useState("");
    const [sex, setSex ]= React.useState("");
    const [steril, setSteril]= React.useState("");
    const [nrCip, setNrCip]= React.useState("");
    const [tipAnimal, setTipAnimal]= React.useState("");
    // se pune in mail/pass ce se scrie in text field
    const handleChangeNume =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNume(event.target.value);
    }
    const handleChangeRasa =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setRasa(event.target.value);
    }

    const handleChangeVarsta =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setVarsta(event.target.value);
    }
    const handleChangeSex =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setSex(event.target.value);
    }
    const handleChangeSteril =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setSteril(event.target.value);
    }
    const handleChangeNrCip =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNrCip(event.target.value);
    }
    const handleChangeTipAnimal =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setTipAnimal(event.target.value);
    }
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        setOpen2(false);
    };
    const handleClick =()=> {
        if(nume!="" && rasa!="" && varsta!="" && sex!="" && steril!="" && nrCip!="" && tipAnimal!="") {
            console.log(pacientId);
            //obiect
            const addAnimal = {
                nume: nume,
                rasa: rasa,
                varsta: parseInt(varsta, 10),
                sex: sex,
                steril: steril,
                nrCip: nrCip,
                tipAnimal: tipAnimal,
                idPacient: pacientId
            }
            console.log(addAnimal);
            //request post
            axios.post("http://localhost:8081/Animal/AdaugaAnimal", addAnimal, {
                headers: {
                    "content-type": "application/json"
                }
            }).then((response: any) => {
                console.log(response.data);
                setOpen2(true);
            });
        }
        else {
            setOpen(true);
        }
    }
    return <div style={MainStyle}>
        <div style={parentDivStyle}>
            <label style={addLabel} >
                Add a new animal:
            </label>
            <div style={{ marginTop: 5 }}>
                <TextField id="nume" label="Nume" variant="outlined" value={nume} onChange={handleChangeNume}/>
            </div>
            <div style={{ marginTop: 5 }}>
                <TextField id="rasa" label="Rasa" variant="outlined" value={rasa} onChange={handleChangeRasa}/>
            </div>
            <div style={{ marginTop: 5 }}>
                <TextField id="varsta" label="Varsta" variant="outlined" value={varsta} onChange={handleChangeVarsta}/>
            </div>
            <div style={{ marginTop: 5 }}>
                <TextField id="sex" label="Sex" variant="outlined" value={sex} onChange={handleChangeSex}/>
            </div>
            <div style={{ marginTop: 5 }}>
                <TextField id="nrCip" label="Numar CIP" variant="outlined" value={nrCip} onChange={handleChangeNrCip} />
            </div>
            <div style={{ marginTop: 5 }}>
                <TextField id="tipAnimal" label="Tip Animal" variant="outlined" value={tipAnimal} onChange={handleChangeTipAnimal} />
            </div>
            <div style={{ marginTop: 5 }}>
                <TextField id="steril" label="Steril(Da/Nu/Nu stiu)" variant="outlined" value={steril} onChange={handleChangeSteril} />
            </div>
            <React.Fragment>
                <Button style={addButtonStyle} onClick={handleClick} variant="contained">Add Animal</Button>
                <Modal
                    open={open2}
                    onClose={handleClose}
                >
                    <ModalContent sx={[styleM, { width: '240px' }]}>
                        <h2>
                            Add was succesfull
                        </h2>
                        <ModalButton onClick={handleClose}>Close</ModalButton>
                    </ModalContent>
                </Modal>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <ModalContent sx={[styleM, { width: '240px' }]}>
                        <h2>
                            Add was not succesful. Some filed is blank.
                        </h2>
                        <ModalButton onClick={handleClose}>Close</ModalButton>
                    </ModalContent>
                </Modal>
            </React.Fragment>
        </div>
    </div>
}