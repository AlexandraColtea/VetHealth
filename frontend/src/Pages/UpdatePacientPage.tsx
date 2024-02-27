import {pacientInterface,utilizatorInterface, MainStyle} from "./UpdatePacientPage.styles";
import React, {useEffect} from "react";
import {ContainerSignIn} from "./UpdatePacientPage.styles";
import {Box, Button, ListItem, ListItemButton, ListItemText, TextField} from "@mui/material";
import {FixedSizeList, ListChildComponentProps} from "react-window";
import axios from "axios";
import {ContainerEdit, ContainerUpdate, SelectButtonStyle, SignButtonStyle} from "./UpdatePacientPage.styles";
import {DeleteButtonStyle} from "./UpdateAdminPage.styles";

export const UpdatePacientPage = (): JSX.Element => {

    const [numeSearch, setNumeSearch ]= React.useState("");
    const [prenumeSearch, setPrenumeSearch ]= React.useState("");

    const [nume, setNume ]= React.useState("");
    const [prenume, setPrenume ]= React.useState("");
    const [adresa, setAdresa ]= React.useState("");
    const [email, setEmail ]= React.useState("");
    const [nrTel, setNrTel ]= React.useState("");
    const [parola, setParola ]= React.useState("");

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

    let idP=0;
    const [pacient, setPacient] = React.useState<pacientInterface>({
        idPacient : 0,
        utilizator: {
            utilizatorId: 0,
            nume: '',
            prenume: '',
            adresa: '',
            email: '',
            nrTel: '',
            parola: '',
        },
    });
    const handleClick =()=> {
        //obiect
        const selectP={
            nume:numeSearch,
            prenume:prenumeSearch,
        }
        //request post
        axios.post("http://localhost:8081/Pacient/findByNumeAndPrenume", selectP, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            // elena a dat return response, si eu am selectatsa se afuseze doar data
            const pacientData=response.data;
            if(pacientData && pacientData.utilizator){
                idP=pacientData.idAdmin;
                console.log(pacientData);
                setPacient(pacientData);
                setNume(pacientData.utilizator.nume);
                setPrenume(pacientData.utilizator.prenume);
                setAdresa(pacientData.utilizator.adresa);
                setEmail(pacientData.utilizator.email);
                setNrTel(pacientData.utilizator.nrTel);
                setParola(pacientData.utilizator.parola);
            }
            else{
                console.error("you need to select an existing pacient");
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
        axios.post("http://localhost:8081/Pacient/findByNumeAndPrenume", selectA, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            // elena a dat return response, si eu am selectatsa se afuseze doar data
            const pacientData=response.data;
            if(pacientData && pacientData.utilizator){
                idP=pacientData.idPacient;
                console.log("doctor ales sa fie sters: ",pacientData);
                console.log(idP);
                axios.post("http://localhost:8081/Pacient/Delete", idP, {
                    headers: {
                        "content-type": "application/json"
                    }
                });
            }
            else{
                console.error("you need to select an existing pacient");
            }
        })

    }

    const handleUpdateClick =()=> {
        //obiect
        const updateD={
            idPacient:pacient.idPacient,
            nume:nume,
            prenume:prenume,
            adresa:adresa,
            email:email ,
            nrTel:nrTel,
            parola:parola
        }
        console.log(updateD);
        //request post
        axios.post("http://localhost:8081/Pacient/UpdateCont", updateD, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            // elena a dat return response, si eu am selectatsa se afuseze doar data
            const pacientData=response.data;
            if(pacientData && pacientData.utilizator){
                idP=pacientData.idAdmin;
                console.log(pacientData);
                setPacient(pacientData);
                setNume(pacientData.utilizator.nume);
                setPrenume(pacientData.utilizator.prenume);
                setAdresa(pacientData.utilizator.adresa);
                setEmail(pacientData.utilizator.email);
                setNrTel(pacientData.utilizator.nrTel);
                setParola(pacientData.utilizator.parola);
            }
            else{
                console.error("the pacient account can't be updated: "+response.data);
            }
        })

    }

    const [pacientList, setPacientList] = React.useState<pacientInterface[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8081/Pacient/All", {
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response: any) => {
                console.log(response.data);
                const pacientsData = response.data;
                setPacientList(pacientsData);
            })
            .catch((error: any) => {
                console.error("Error fetching pacient list:", error);
            });
    }, []); // [] asigură că acest efect se execută doar la încărcarea componentei
    return (
        <div style={MainStyle}>
            <div style={{ ...ContainerSignIn, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Pacients</p>
                <Box
                    sx={{ width: '100%', height: 330, maxWidth: 360, bgcolor: 'background.paper' }}
                >
                    <FixedSizeList
                        height={320}
                        width={360}
                        itemSize={46}
                        itemCount={pacientList.length}
                        overscanCount={5}
                    >
                        {({ index, style }) => (
                            <ListItem style={style} key={pacientList[index].idPacient} component="div" disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={`${pacientList[index].utilizator.nume} ${pacientList[index].utilizator.prenume}`} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </FixedSizeList>
                </Box>
            </div>
            <div style={{ ...ContainerEdit, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Select pacient to edit</p>
                <TextField id="numeSearch" label="NumeSearch" variant="outlined" value={numeSearch} onChange={handleChangeNumeSearch} />
                <TextField id="prenumeSearch" label="PrenumeSearch" variant="outlined" value={prenumeSearch} onChange={handleChangePrenumeSearch} />
                <Button style={SelectButtonStyle} onClick={handleClick}>Select</Button>

            </div>
            <div style={{ ...ContainerUpdate, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Edit a Pacient Account</p>
                <TextField id="nume" label="Nume" variant="outlined" value={nume} onChange={handleChangeNume} />
                <TextField id="prenume" label="Prenume" variant="outlined" value={prenume} onChange={handleChangePrenume} />
                <TextField id="adresa" label="Adresa" variant="outlined" value={adresa} onChange={handleChangeAdresa} />
                <TextField id="email" label="Email" variant="outlined" value={email} onChange={handleChangeEmail} />
                <TextField id="nrTel" label="NrTel" variant="outlined" value={nrTel} onChange={handleChangeNrTel} />
                <TextField id="parola" label="Parola" variant="outlined" value={parola} onChange={handleChangeParola} />
                <Button style={SignButtonStyle} onClick={handleUpdateClick}>Edit</Button>
            </div>
        </div>
    );

};