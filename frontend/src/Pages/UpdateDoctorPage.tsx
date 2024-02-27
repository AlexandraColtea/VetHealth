import {doctorInterface,utilizatorInterface, MainStyle} from "./UpdateDoctorPage.styles";
import React, {useEffect} from "react";
import {ContainerSignIn} from "./UpdateDoctorPage.styles";
import {Box, Button, ListItem, ListItemButton, ListItemText, TextField} from "@mui/material";
import {FixedSizeList, ListChildComponentProps} from "react-window";
import axios from "axios";
import { ContainerEdit, SelectButtonStyle} from "./UpdateDoctorPage.styles";
import { SignButtonStyle} from "./UpdateDoctorPage.styles";
import {ContainerUpdate} from "./UpdateDoctorPage.styles";
import {DeleteButtonStyle} from "./UpdateAdminPage.styles";

export const UpdateDoctorPage = (): JSX.Element => {

    const [numeSearch, setNumeSearch ]= React.useState("");
    const [prenumeSearch, setPrenumeSearch ]= React.useState("");

    const [nume, setNume ]= React.useState("");
    const [prenume, setPrenume ]= React.useState("");
    const [adresa, setAdresa ]= React.useState("");
    const [email, setEmail ]= React.useState("");
    const [nrTel, setNrTel ]= React.useState("");
    const [parola, setParola ]= React.useState("");
    const [specializare, setSpecializare ]= React.useState("");

    const handleChangeNumeSearch =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNumeSearch(event.target.value);
    }
    const handleChangePrenumeSearch =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setPrenumeSearch(event.target.value);
    }

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
    const handleChangeSpecializare =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setSpecializare(event.target.value);
    }
    let idD=0;
    const [doctor, setDoctor] = React.useState<doctorInterface>({
        idDoctor : 0,
        specializare: '',
        feedback : [],
        utilizator: {
            utilizatorId: 0,
            nume: '',
            prenume: '',
            adresa: '',
            email: '',
            nrTel: '',
            parola: '',
        }
    });
    const handleClick =()=> {
        //obiect
        const selectA={
            nume:numeSearch,
            prenume:prenumeSearch,
        }
        //request post
        axios.post("http://localhost:8081/Doctor/findByNumeAndPrenume", selectA, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            // elena a dat return response, si eu am selectatsa se afuseze doar data
            const doctorData=response.data;
            if(doctorData && doctorData.utilizator){
                idD=doctorData.idAdmin;
                console.log(doctorData);
                setDoctor(doctorData);
                setNume(doctorData.utilizator.nume);
                setPrenume(doctorData.utilizator.prenume);
                setAdresa(doctorData.utilizator.adresa);
                setEmail(doctorData.utilizator.email);
                setNrTel(doctorData.utilizator.nrTel);
                setParola(doctorData.utilizator.parola);
                setSpecializare(doctorData.specializare);
            }
            else{
                console.error("you need to select an existing doctor");
            }
        })

    }
    const handleDeleteClick =()=> {
        //obiect
        const selectA={
            nume:numeSearch,
            prenume:prenumeSearch,
        }
        //request post
        axios.post("http://localhost:8081/Doctor/findByNumeAndPrenume", selectA, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            // elena a dat return response, si eu am selectatsa se afuseze doar data
            const doctorData=response.data;
            if(doctorData && doctorData.utilizator){
                idD=doctorData.idDoctor;
                console.log("doctor ales sa fie sters: ",doctorData);
                console.log(idD);
                axios.post("http://localhost:8081/Doctor/Delete", idD, {
                    headers: {
                        "content-type": "application/json"
                    }
                });
            }
            else{
                console.error("you need to select an existing doctor");
            }
        })

    }
    const handleUpdateClick =()=> {
        //obiect
        const updateD={
            idDoctor:doctor.idDoctor,
            nume:nume,
            prenume:prenume,
            adresa:adresa,
            email:email ,
            nrTel:nrTel,
            parola:parola,
            specializare:specializare
        }
        console.log(updateD);
        //request post
        axios.post("http://localhost:8081/Doctor/UpdateCont", updateD, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            // elena a dat return response, si eu am selectatsa se afuseze doar data
            const doctorData=response.data;
            if(doctorData && doctorData.utilizator){
                idD=doctorData.idAdmin;
                console.log(doctorData);
                setDoctor(doctorData);
                setNume(doctorData.utilizator.nume);
                setPrenume(doctorData.utilizator.prenume);
                setAdresa(doctorData.utilizator.adresa);
                setEmail(doctorData.utilizator.email);
                setNrTel(doctorData.utilizator.nrTel);
                setParola(doctorData.utilizator.parola);
                setSpecializare(doctorData.specializare);
            }
            else{
                console.error("the doctor account can't be updated: "+response.data);
            }
        })

    }
    const [doctorList, setDoctorList] = React.useState<doctorInterface[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8081/Doctor/All", {
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response: any) => {
                console.log(response.data);
                const doctorsData = response.data;
                setDoctorList(doctorsData);
            })
            .catch((error: any) => {
                console.error("Error fetching doctor list:", error);
            });
    }, []); // [] asigură că acest efect se execută doar la încărcarea componentei
    return (
        <div style={MainStyle}>
            <div style={{ ...ContainerSignIn, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Doctors</p>
                <Box
                    sx={{ width: '100%', height: 330, maxWidth: 360, bgcolor: 'background.paper' }}
                >
                    <FixedSizeList
                        height={320}
                        width={360}
                        itemSize={46}
                        itemCount={doctorList.length}
                        overscanCount={5}
                    >
                        {({ index, style }) => (
                            <ListItem style={style} key={doctorList[index].idDoctor} component="div" disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={`${doctorList[index].utilizator.nume} ${doctorList[index].utilizator.prenume} ${doctorList[index].specializare}`} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </FixedSizeList>
                </Box>
            </div>
            <div style={{ ...ContainerEdit, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Select doctor to edit</p>
                <TextField id="numeSearch" label="NumeSearch" variant="outlined" value={numeSearch} onChange={handleChangeNumeSearch} />
                <TextField id="prenumeSearch" label="PrenumeSearch" variant="outlined" value={prenumeSearch} onChange={handleChangePrenumeSearch} />
                <Button style={SelectButtonStyle} onClick={handleClick}>Select</Button>
                <Button style={DeleteButtonStyle} onClick={handleDeleteClick}>Delete</Button>
            </div>
            <div style={{ ...ContainerUpdate, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Edit a Doctor Account</p>
                <TextField id="nume" label="Nume" variant="outlined" value={nume} onChange={handleChangeNume} />
                <TextField id="prenume" label="Prenume" variant="outlined" value={prenume} onChange={handleChangePrenume} />
                <TextField id="adresa" label="Adresa" variant="outlined" value={adresa} onChange={handleChangeAdresa} />
                <TextField id="email" label="Email" variant="outlined" value={email} onChange={handleChangeEmail} />
                <TextField id="nrTel" label="NrTel" variant="outlined" value={nrTel} onChange={handleChangeNrTel} />
                <TextField id="parola" label="Parola" variant="outlined" value={parola} onChange={handleChangeParola} />
                <TextField id="specializare" label="Specializare" variant="outlined" value={specializare} onChange={handleChangeSpecializare} />
                <Button style={SignButtonStyle} onClick={handleUpdateClick}>Edit</Button>
            </div>
        </div>
    );

};