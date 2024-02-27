import React, { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import {Box, Button, Card, ListItem, ListItemButton, ListItemText, Modal, TextField} from "@mui/material";
import {
    boalaInterface,
    doctorInterface,
    MainStyle,
    updateButtonStyle,
    updateLabel,
    parent2DivStyle,
    selectButtonStyle,
    parent3DivStyle,
    illnessLabel,
    searchLabel,
    insertButtonStyle,
    ContainerSignIn,
    LogoutButtonStyle,
    ContainerBoli, feedbackContainerStyle, seeAnimalsButtonStyle, myAnimalsLabel, parentDivStyle
} from "./DoctorPage.styles";

import axios from "axios";
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import {ModalButton, ModalContent, styleM} from "./LoginPage.style";
//import {AnimalContainerStyle, myAnimalsLabel, parentDivStyle} from "./PacientPage.styles";



export const DoctorPage = (): JSX.Element => {

    const navigate = useNavigate();
    const location = useLocation();
    const userId = parseInt(location.state?.key, 10);
    console.log(userId);
    const [nume, setNume ]= React.useState("");
    const [prenume, setPrenume ]= React.useState("");
    const [adresa, setAdresa ]= React.useState("");
    const [email, setEmail ]= React.useState("");
    const [nrTel, setNrTel ]= React.useState("");
    const [parola, setParola ]= React.useState("");
    const [specializare, setSpecializare ]= React.useState("");

    const [numeBoala, setNumeBoala ]= React.useState("");
    const [numeBoala2, setNumeBoala2 ]= React.useState("");
    const [descriereBoala, setDescriereBoala ]= React.useState("");

    // se pune in mail/pass ce se scrie in text field
    const handleChangeNumeBoala =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNumeBoala(event.target.value);
    }
    const handleChangeNumeBoala2 =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNumeBoala2(event.target.value);
    }
    const handleChangeDescriereBoala =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setDescriereBoala(event.target.value);
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
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        setOpen2(false);
        setOpen3(false);
    };
    const handleClick =()=> {
        //obiect
        const updateData={
            idDoctor:doctor.idDoctor,
            nume:nume,
            prenume:prenume,
            adresa:adresa,
            email:email ,
            nrTel:nrTel,
            parola:parola,
            specializare:specializare
        }
        //request post
        axios.post("http://localhost:8081/Doctor/UpdateCont", updateData, {
            headers: {
                "content-type": "application/json"
            },
            transformResponse: [function (data) {
                console.log(data);  // Afișează conținutul răspunsului pentru depanare
                return data;
            }],
        }).then((response: any) => {
            console.log(response.data);
        }).catch((error: any) => {
            console.error("Error updating Doctor:", error);
        });
    }
    const [doctor, setDoctor] = React.useState<doctorInterface>({
        idDoctor: 0,
        specializare:'',
        feedback: [],
        utilizator: {
            utilizatorId: userId,
            nume: '',
            prenume: '',
            adresa: '',
            email: '',
            nrTel: '',
            parola: '',
        },
        d2a:[],
        animale:[]
    });
    const [dateBoala, setDateBoala] = React.useState<string>('');
    const handleSelectClick = () => {
        // Obiect pentru căutarea doctorului
        const searchBoala = {
            numeBoala: numeBoala,
        };

        // Cerere pentru a găsi doctorul
        axios.post("http://localhost:8081/Boala/GetByNumeBoala", searchBoala, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            const dateBoala = response.data.descriereBoala;
            if(dateBoala){
                setDateBoala(dateBoala);}
            else setOpen(true);
        }).catch((error: any) => {
            setOpen(true);
            console.error("There is not such illnes:", error);
        });
    };

    const handleInsertClick = () => {
        if(numeBoala2!=""&&descriereBoala!="") {
            // Obiect pentru căutarea doctorului
            const insertBoala = {
                numeBoala: numeBoala2,
                descriereBoala: descriereBoala
            };

            // Cerere pentru a găsi doctorul
            axios.post("http://localhost:8081/Boala/InserareBoala", insertBoala, {
                headers: {
                    "content-type": "application/json"
                }
            }).then((response: any) => {
                console.log("Inserted into boala:", response.data);
                setOpen2(true);
            }).catch((error: any) => {
                console.error("Could not insert illnes:", error);
            });
        }
        else {setOpen3(true);}
    };
    const handleSeeClick = () => {
        navigate("/DoctorsAnimals", { state: { key: userId } });
    };
    useEffect(() => {
        axios.post("http://localhost:8081/Doctor/GetByUtilizatorId", userId, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            console.log("Doctorul: ",response.data);
            const doctorData = response.data;
            // Set the state with values from the doctor object
            if (doctorData && doctorData.utilizator) {
                setDoctor(doctorData);
                setNume(doctorData.utilizator.nume);
                setPrenume(doctorData.utilizator.prenume);
                setAdresa(doctorData.utilizator.adresa);
                setEmail(doctorData.utilizator.email);
                setNrTel(doctorData.utilizator.nrTel);
                setParola(doctorData.utilizator.parola);
                setSpecializare(doctorData.specializare);
            }
        });
    }, [userId]);

    function renderRow(props: ListChildComponentProps) {
        const { index, style } = props;
        const feed = doctor.feedback[index];
        return (
            <ListItem style={style} component="div" disablePadding>
                <ListItemButton>
                    <ListItemText primary={feed} />
                </ListItemButton>
            </ListItem>
        );
    }

    const handleLogoutClick =()=> {
        navigate("/LoginPage" );
    }

    return (
        <div style={MainStyle}>

            <div style={ContainerSignIn}>
                <div style={{fontFamily:"TimesNewRoman", fontSize:30}}>
                    <p>
                        My Profile
                    </p>
                    <TextField id="nume" label="Nume" variant="outlined" value={nume} onChange={handleChangeNume} style={{ marginLeft: 10 }}/>
                    <TextField id="prenume" label="Prenume" variant="outlined" value={prenume} onChange={handleChangePrenume} style={{ marginLeft: 10, marginTop:10 }}/>
                    <TextField id="adresa" label="Adresa" variant="outlined" value={adresa} onChange={handleChangeAdresa} style={{ marginLeft: 10, marginTop:10 }}/>
                    <TextField id="email" label="Email" variant="outlined" value={email} onChange={handleChangeEmail} style={{ marginLeft: 10, marginTop:10 }}/>
                    <TextField id="nrTel" label="NrTel" variant="outlined" value={nrTel} onChange={handleChangeNrTel} style={{ marginLeft: 10 , marginTop:10}}/>
                    <TextField id="parola" label="Parola" variant="outlined" value={parola} onChange={handleChangeParola} style={{ marginLeft: 10 , marginTop:10}}/>
                    <TextField id="specializare" label="Specializare" variant="outlined" value={specializare} onChange={handleChangeSpecializare} style={{ marginLeft: 10, marginTop:10 }}/>
                    <Button style={updateButtonStyle} onClick={handleClick} variant="contained">Update Your Data</Button>
                </div>
            </div>

            <div style={{ ...ContainerBoli, marginTop:-630, opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>
                    Search and add new illness
                </p>
                <TextField id="boli" label="Boala" variant="outlined" value={numeBoala} onChange={handleChangeNumeBoala} />
                <Button style={selectButtonStyle} onClick={handleSelectClick} variant="contained">Search illness</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <ModalContent sx={[styleM, { width: '240px' }]}>
                        <h2>
                            The illness you are trying to find does not exist in our database.
                        </h2>
                        <ModalButton onClick={handleClose}>Close</ModalButton>
                    </ModalContent>
                </Modal>
                <textarea
                    id="boala"
                    style={{ marginLeft: 0 ,marginTop:10,width: '100%', height: 200, maxWidth: 360,fontSize:18}}
                    value={dateBoala} onChange={(e) => setDateBoala(e.target.value)}
                ></textarea>


                <div style={parent3DivStyle}>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold',marginLeft:270, marginBottom: '0px', color: 'black', marginTop:10 }} >
                        Insert a new illness documentation:
                    </p>
                    <div style={{ marginTop: 120, marginLeft: 210  }}>
                        <TextField id="numeBoala" label="Nume Boala" variant="outlined" value={numeBoala2} onChange={handleChangeNumeBoala2} style={{ marginLeft: 60 ,marginTop:-110}}/>
                        <textarea
                            id="boalaNoua"
                            style={{ marginLeft: 60 ,marginTop:-50,width: '100%', height: 140, maxWidth: 360,fontSize:18}}
                            value={descriereBoala} onChange={handleChangeDescriereBoala}
                        ></textarea>
                        <Button style={insertButtonStyle} onClick={handleInsertClick} variant="contained">Add illness</Button>
                        <Modal
                            open={open2}
                            onClose={handleClose}
                        >
                            <ModalContent sx={[styleM, { width: '240px' }]}>
                                <h2>
                                    Illness added succsefully.
                                </h2>
                                <ModalButton onClick={handleClose}>Close</ModalButton>
                            </ModalContent>
                        </Modal>

                        <Modal
                            open={open3}
                            onClose={handleClose}
                        >
                            <ModalContent sx={[styleM, { width: '240px' }]}>
                                <h2>
                                    Could not add illness. Some data was not provided.
                                </h2>
                                <ModalButton onClick={handleClose}>Close</ModalButton>
                            </ModalContent>
                        </Modal>
                    </div>
                </div>
            </div>

            <div style={feedbackContainerStyle}>
                <p  style={{ fontSize: '1.5rem', fontWeight: 'bold',marginLeft:60, marginBottom: '0px', color: 'black', marginTop:'0px' }}>
                    My Feedback
                </p>
                {/*<div style={parentDivStyle}>*/}
                <Box
                    sx={{ width: '90%', height: 200, maxWidth: 320, bgcolor: 'transparent',color:'black',marginLeft:'0px', marginTop:'20px' }}
                >
                    <FixedSizeList
                        height={200}
                        width={300}
                        itemSize={46}
                        itemCount={doctor?.feedback?.length || 0} // Am ajustat itemCount-ul
                        overscanCount={5}
                    >
                        {renderRow}
                    </FixedSizeList>
                </Box>
                <Button style={seeAnimalsButtonStyle} onClick={handleSeeClick} variant="contained">See the animals</Button>
                <Button style={LogoutButtonStyle} onClick={handleLogoutClick}>Logout</Button>
                {/*</div>*/}
            </div>
        </div>
    );
};
