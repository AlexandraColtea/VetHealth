import React, { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import {Box, Button, Card, ListItem, ListItemButton, ListItemText, Modal, TextField} from "@mui/material";

import axios from "axios";
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import {
    doctorInterface,
    infoInterface, MyAnimalsContainerStyle,
    SelectAnimalContainerStyle
} from "./DoctorsAnimals.styles";
import { MainStyle, myAnimalsLabel, parentDivStyle} from "./DoctorsAnimals.styles";
import {ModalButton, ModalContent, styleM} from "./LoginPage.style";




export const DoctorsAnimals = (): JSX.Element => {

    const navigate = useNavigate();
    const location = useLocation();
    const userId = parseInt(location.state?.key, 10);

    const [numeAnimal, setNumeAnimal ]= React.useState("");
    const [feedback, setFeedback ]= React.useState("");
    const [stare, setStare ]= React.useState("");
    const [detalii, setDetalii ]= React.useState("");


    // se pune in mail/pass ce se scrie in text field

    console.log(userId);
    const handleChangeNumeAnimal =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNumeAnimal(event.target.value);
    }
    const handleChangeFeedback =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setFeedback(event.target.value);
    }
    const handleChangeStare =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setStare(event.target.value);
    }
    const handleChangeDetalii =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setDetalii(event.target.value);
    }
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        setOpen2(false);
        setOpen3(false);
        setOpen4(false);
    };
    const [doctor, setDoctor] = React.useState<doctorInterface>({
        idDoctor: 0,
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
    useEffect(() => {
        axios.post("http://localhost:8081/Doctor/GetByUtilizatorId", userId, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            console.log(response.data);
            const doctorData = response.data;
            // Set the state with values from the doctor object
            if (doctorData && doctorData.utilizator) {
                setDoctor(doctorData);
            }
        });
    }, [userId]);

    function renderRow(props: ListChildComponentProps) {
        const { index, style } = props;
        const animal = doctor.animale[index];
        return (
            <ListItem style={style} key={animal.idAnimal} component="div" disablePadding>
                <ListItemButton>
                    <ListItemText primary={animal.nume} />
                </ListItemButton>
            </ListItem>
        );
    }



    const handleOpenClick = () => {

        // Obiect pentru căutarea doctorului
        const searchAnimal = {
            nume: numeAnimal,
            idPacient:doctor.idDoctor
        };

        // Cerere pentru a găsi doctorul
        axios.post("http://localhost:8081/Animal/GetByNumeAndIdDoctor", searchAnimal, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            const animalId = response.data.idAnimal;
            if (animalId) {
                console.log(animalId);
                console.log(userId);

                // Obiect pentru a fi inserat în doc2animal
                const doc2animalData = {
                    idDoctor: doctor.idDoctor,
                    idAnimal: animalId
                };
                console.log(doc2animalData);
                // Cerere pentru a insera în doc2animal
                axios.post("http://localhost:8081/Doc2Animal/FindByIdDAndIdA", doc2animalData, {
                    headers: {
                        "content-type": "application/json"
                    }
                }).then((doc2animalResponse: any) => {
                    //console.log("Inserted into doc2animal:", doc2animalResponse.data);
                    if (doc2animalResponse.data.idDoc2Animal) {

                        console.log(doctor.utilizator.nume);

                        const doctorsid2a={
                            getAnimal:doctor.utilizator,
                            getD2a:doc2animalResponse.data,
                            dsaua:"d"
                        };
                        console.log(doctorsid2a);
                        navigate("/ChatPage", { state: doctorsid2a });

                    } else {
                        console.error("Don't find any inseration with these ids:", response.data);
                    }
                    //navigate("/ChatPage", { state: { key: doc2animalResponse.data.idDoc2Animal} });

                    // Restul codului după ce cererea este finalizată cu succes.
                }).catch((doc2animalError: any) => {
                    console.error("Error find any insertion with these ids:", doc2animalError);
                });
            } else {
                console.error("Doctor ID not found in the response:", response.data);
            }
        }).catch((error: any) => {
            console.error("Error fetching doctor:", error);
        });
    };

    const [feedAnimale, setFeedAnimale] = React.useState<[]>([]);
    const [animalID, setIdAnimal] = React.useState<number>(0);
    const [infoList, setInfoList] = React.useState<infoInterface[]>([]);
    const handleSelectClick = () => {

        // Obiect pentru căutarea animalului
        const searchAnimal = {
            nume: numeAnimal,
            idPacient:doctor.idDoctor
        };
        console.log(searchAnimal);
        // Cerere pentru a găsi doctorul
        axios.post("http://localhost:8081/Animal/GetByNumeAndIdDoctor", searchAnimal, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            const animalId = response.data.idAnimal;
            console.log("animalul: ",response.data);
            if (animalId) {
                // console.log(animalId);
                // console.log(userId);
                console.log(response.data.feedbacks);
                setFeedAnimale(response.data.feedbacks);
                setIdAnimal(animalId);
                axios.post("http://localhost:8081/InfoStare/AllById", animalId, {
                    headers: {
                        "content-type": "application/json"
                    }
                }).then((response: any) => {
                    const infoData = response.data;
                    if(infoData){
                        setInfoList(infoData);}
                });

            } else {
                setOpen4(true);
                console.error("Animal ID not found in the response:", response.data);
            }
        }).catch((error: any) => {
            console.error("Error fetching animal:", error);
        });
    };
    const handleAddClick = () => {

        // Obiect pentru căutarea animalului
        const searchAnimal = {
            idPacient:doctor.idDoctor,
            nume: numeAnimal,
            feed: feedback
        };
        console.log(searchAnimal);
        // Cerere pentru a găsi doctorul
        axios.post("http://localhost:8081/Animal/AddFeedAnimal", searchAnimal, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            const animalId = response.data.idAnimal;
            if (animalId) {
                if(feedback!="")
                    handleSelectClick();
                else setOpen(true);
            } else {
                setOpen(true);
                console.error("Animal ID not found in the response:", response.data);
            }
        }).catch((error: any) => {
            console.error("Error fetching animal:", error);
            setOpen4(true);
        });
    };

    const handleAddInfoClick = () => {

        // Obiect pentru căutarea animalului
        const addInfo = {
            idAnimal:animalID,
            stare: stare,
            detalii: detalii
        };
        console.log("adaug in istoric: ",addInfo);
        //if(stare==""||detalii=="")setOpen3(true);
        // Cerere pentru a găsi doctorul
        axios.post("http://localhost:8081/InfoStare/InsertInfoStare", addInfo, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            console.log("iii ",response.data)
            if(stare!=""&& detalii!="")
                handleSelectClick();
            else setOpen3(true);
        }).catch((error: any) => {
            console.error("Error fetching animal:", error);
            setOpen4(true);
        });
    };

    function renderRow2(props: ListChildComponentProps) {
        const { index, style } = props;
        const feed = feedAnimale[index];
        return (
            <ListItem style={style}  component="div" disablePadding>
                <ListItemButton>
                    <ListItemText primary={feed} />
                </ListItemButton>
            </ListItem>
        );
    }
    //console.log(feedAnimale.length);
    return (
        <div style={MainStyle}>

            <div style={SelectAnimalContainerStyle}>

                <TextField label="Nume Animal" value={numeAnimal} onChange={handleChangeNumeAnimal} style={{marginTop:10,marginLeft:10} }></TextField>
                <Button style={{  position: "absolute",
                    marginLeft:240,
                    marginTop:20,
                    fontSize:15,
                    color:"black",
                    backgroundColor: 'dimgray'}} onClick={handleSelectClick} variant="contained" >Select  Animal</Button>
                <Modal
                    open={open4}
                    onClose={handleClose}
                >
                    <ModalContent sx={[styleM, { width: '240px' }]}>
                        <h2>
                            Animal not found!
                        </h2>
                        <ModalButton onClick={handleClose}>Close</ModalButton>
                    </ModalContent>
                </Modal>

                <p style={{marginLeft:70, marginTop:10, fontFamily:'TimesNewRoman', fontSize:20}}>Do you want to talk?</p>
                <Button onClick={handleOpenClick} variant="contained" style={{marginTop:-50,marginLeft:250,fontSize:15,backgroundColor: 'dimgray', color:"black",}}>Open chat</Button>

                <p style={{marginLeft:10, marginTop:10, fontFamily:'TimesNewRoman', fontSize:17}} >Add the status of the animal.</p>
                <TextField label="Adauga stare Animal" value={stare} onChange={handleChangeStare} style={{marginTop:0,marginLeft:0} }></TextField>
                <TextField label="* detalii suplimentare" value={detalii} onChange={handleChangeDetalii} style={{marginTop:10,marginLeft:0} }></TextField>
                <Button onClick={handleAddInfoClick} variant="contained" style={{marginTop:-50,marginLeft:250,fontSize:20,backgroundColor: 'dimgray', color:"black",}}>Add info</Button>
                <Modal
                    open={open3}
                    onClose={handleClose}
                >
                    <ModalContent sx={[styleM, { width: '240px' }]}>
                        <h2>
                            An error occurred! Could not add information.
                        </h2>
                        <ModalButton onClick={handleClose}>Close</ModalButton>
                    </ModalContent>
                </Modal>
                <Box
                    sx={{ width: '100%', height:180, maxWidth: 360, bgcolor: 'background.paper' ,marginLeft:'0px', marginTop:'10px' }}
                >
                    <FixedSizeList
                        height={150}
                        width={360}
                        itemSize={46}
                        itemCount={infoList.length}
                        overscanCount={5}
                    >
                        {({ index, style }) => (
                            <ListItem style={style} key={infoList[index].idInfo} component="div" disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={`${infoList[index].stare} - ${infoList[index].detalii}`} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </FixedSizeList>
                </Box>

                <p style={{marginLeft:10, marginTop:10, fontFamily:'TimesNewRoman', fontSize:17}} >Add feedback.</p>
                <TextField label="Adauga feedback Animal" value={feedback} onChange={handleChangeFeedback} style={{marginTop:-10,marginLeft:0} }></TextField>
                <Button onClick={handleAddClick} variant="contained" style={{marginTop:-60,marginLeft:250,  fontSize:14,backgroundColor: 'dimgray', color:"black",}}>Send feedback</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <ModalContent sx={[styleM, { width: '240px' }]}>
                        <h2>
                            An error occurred! Could not add feedback.
                        </h2>
                        <ModalButton onClick={handleClose}>Close</ModalButton>
                    </ModalContent>
                </Modal>
                <Box
                    sx={{ width: '90%', height: 100, maxWidth: 360, bgcolor: 'background.paper',marginLeft:'10px', marginTop:'10px' }}
                >
                    <FixedSizeList
                        height={100}
                        width={300}
                        itemSize={46}
                        itemCount={feedAnimale?.length || 0} // Am ajustat itemCount-ul
                        overscanCount={5}
                    >
                        {renderRow2}
                    </FixedSizeList>
                </Box>


            </div>


            <div style={MyAnimalsContainerStyle}>
                <p style={{fontFamily:'TimesNewRoman', fontSize:30, marginLeft:20}}>MyAnimals</p>
                <Box
                    sx={{ width: '100%', height: 200, maxWidth: 360, bgcolor: 'background.paper',marginLeft:'10px', marginTop:'0px' }}
                >
                    <FixedSizeList
                        height={400}
                        width={360}
                        itemSize={46}
                        itemCount={doctor?.animale?.length || 0} // Am ajustat itemCount-ul
                        overscanCount={5}
                    >
                        {renderRow}
                    </FixedSizeList>
                </Box>
            </div>
        </div>
    );
};
