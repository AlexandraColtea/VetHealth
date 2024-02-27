import {
    animalInterface,
    ButtonStyle,
    ContainerAnimalProfil, ContainerMyDoctorProfil, d2aInterface,
    doctorInterface, infoStareInterface,
    MainStyle, parent1DivStyle,
    parent3DivStyle, parent4DivStyle,
    StackStyle, utilizatorInterface, voucherInterface
} from "./AnimalPage.styles";
import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { parentDivStyle,updateButtonStyle,parent2DivStyle,nameSearchLabel, searchTFieldstyle, selectButtonStyle,search2TFieldstyle,openButtonStyle} from "./AnimalPage.styles";
import {Box, Button, ListItem, ListItemButton, ListItemText, Modal, Stack, TextField} from "@mui/material";
import axios from "axios";

import {FixedSizeList, ListChildComponentProps} from "react-window";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {ModalButton, ModalContent, styleM} from "./LoginPage.style";
export const AnimalPage = (): JSX.Element => {
    const navigate=useNavigate();
    const location=useLocation();
    const getAnimal=location.state;
    const animalId = getAnimal.idAnimal;
    const pacientId = getAnimal.idPacient;
    const myDId=getAnimal.idDoctor;
   // console.log("animalul dat:",getAnimal)

    const [nume, setNume ]= React.useState("");
    const [rasa, setRasa ]= React.useState("");
    const [varsta, setVarsta ]= React.useState("");
    const [sex, setSex ]= React.useState("");
    const [steril, setSteril]= React.useState("");
    const [nrCip, setNrCip]= React.useState("");
    const [tipAnimal, setTipAnimal]= React.useState("");
    const [numeDoctor, setNumeDoctor ]= React.useState("");
    const [prenumeDoctor, setPrenumeDoctor ]= React.useState("");
    const [feedbackDoctor, setFeedbackDoctor ]= React.useState("");
    //const [mydoctorId, setMyDoctorId ]= React.useState("");

    const [numeD, setNumeD ]= React.useState("");
    const [prenumeD, setPrenumeD]= React.useState("");

    const handleChangeNumeDcotor =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNumeDoctor(event.target.value);
    }
    const handleChangePrenumeDcotor =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setPrenumeDoctor(event.target.value);
    }
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
    const handleChangeFeedbackDoctor =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setFeedbackDoctor(event.target.value);
    }
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        setOpen2(false);
        setOpen3(false);
        setOpen4(false);
        setOpen5(false);
        setOpen6(false);
    };
    const handleClick =()=> {
        //obiect
        const updateAnimal={
            idAnimal:animalId,
            nume:nume,
            rasa:rasa,
            varsta:parseInt(varsta,10),
            sex:sex ,
            steril:steril,
            nrCip:nrCip,
            tipAnimal:tipAnimal,
            idPacient:pacientId
        }
        console.log(updateAnimal);
        //request post
        axios.post("http://localhost:8081/Animal/UpdateAnimal", updateAnimal, {
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
            console.error("Error updating Animal:", error);
        });
    }
    const [animal, setAnimal] = React.useState<animalInterface>({
        idAnimal: animalId,
        nume: '',
        rasa: '',
        varsta:0,
        sex: '',
        steril: '',
        nrCip: '',
        tipAnimal: '',
        idPacient: pacientId,
        idDoctor: myDId,
        feedbacks: [],
        d2a:[],
        istoric:[],
        vouchers:[]
    });

    const [voucherList, setVoucherList] = React.useState<voucherInterface[]>([]);
    const [infoStareList, setInfoStareList] = React.useState<infoStareInterface[]>([]);
    useEffect(() => {
        console.log(animalId);
        axios.post("http://localhost:8081/Animal/GetById", animalId, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            console.log("animalutul: ",response.data);
            const animalData = response.data;
            // Set the state with values from the pacient object
            if (animalData ) {
                setAnimal(animalData);
               // setMyDoctorId(animalData.idDoctor);
                setVoucherList(animalData.vouchers);
                setInfoStareList(animalData.istoric);
                setNume(animalData.nume);
                setRasa(animalData.rasa);
                setVarsta(animalData.varsta);
                setSex(animalData.sex);
                setSteril(animalData.steril);
                setNrCip(animalData.nrCip);
                setTipAnimal(animalData.tipAnimal);

            }
        });
    }, [animalId]);

    function renderRow(props: ListChildComponentProps) {
        const { index, style } = props;
        const feedback = animal.feedbacks[index];
        return (
            <ListItem style={{ ...style, marginLeft: '-20px' }} key={index} component="div" disablePadding>
                <ListItemButton>
                    <ListItemText style={{ marginLeft: '20px' }} primary={feedback} />
                </ListItemButton>
            </ListItem>
        );
    }

    useEffect(() => {
        console.log("id doctor meu:",myDId);
        if(myDId){
        axios.post("http://localhost:8081/Doctor/GetByDoctorId", myDId, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            console.log("doctorul meu: ",response.data);
            const doctorData = response.data;
            // Set the state with values from the pacient object
            if (doctorData && doctorData.utilizator ) {
                setNumeD(doctorData.utilizator.nume);
                setPrenumeD(doctorData.utilizator.prenume);
            }
        });}
    }, [myDId]);

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

    const handleSelectClick = () => {
        // Obiect pentru căutarea doctorului
        const searchDoctor = {
            nume: numeDoctor,
            prenume: prenumeDoctor
        };

        // Cerere pentru a găsi doctorul
        axios.post("http://localhost:8081/Doctor/findByNumeAndPrenume", searchDoctor, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            const doctorId = response.data.idDoctor;
            if (doctorId) {
                console.log(doctorId);


                // Obiect pentru a fi inserat în doc2animal
                const doc2animalData = {
                    idDoctor: doctorId,
                    idAnimal: animalId
                };

                // Cerere pentru a insera în doc2animal
                axios.post("http://localhost:8081/Doc2Animal/InsertDoc2Animal", doc2animalData, {
                    headers: {
                        "content-type": "application/json"
                    }
                }).then((doc2animalResponse: any) => {
                    if(doc2animalResponse.data) {
                        console.log("Inserted into doc2animal:", doc2animalResponse.data);
                       // setMyDoctorId(doctorId);
                        setOpen2(true);
                    }
                    else{
                        console.error('Error: doctor already has this animal');
                        setOpen3(true);
                    }

                    // Restul codului după ce cererea este finalizată cu succes.
                }).catch((doc2animalError: any) => {
                    console.error("Error inserting into doc2animal:", doc2animalError);
                    setOpen3(true);
                });
            } else {
                setOpen(true);
                console.error("Doctor ID not found in the response:", response.data);
            }
        }).catch((error: any) => {
            console.error("Error fetching doctor:", error);
        });
    };
    const handleOpenClick = () => {

        // Obiect pentru căutarea doctorului
        const searchDoctor = {
            nume: numeDoctor,
            prenume: prenumeDoctor
        };

        // Cerere pentru a găsi doctorul
        axios.post("http://localhost:8081/Doctor/findByNumeAndPrenume", searchDoctor, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            const doctorId = response.data.idDoctor;
            if (doctorId) {
                console.log(doctorId);
                console.log(animalId);

                // Obiect pentru a fi inserat în doc2animal
                const doc2animalData = {
                    idDoctor: doctorId,
                    idAnimal: animalId,
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
                        console.log(doc2animalResponse.data);
                        const animalsid2a={
                            getAnimal:getAnimal,
                            getD2a:doc2animalResponse.data,
                            dsaua:"a"
                        };
                        console.log("animalutul care vorbeste: ",animalsid2a)
                        navigate("/ChatPage", { state: animalsid2a });

                    } else {
                        console.error("Don't find any inseration with these ids:", response.data);
                    }
                    //navigate("/ChatPage", { state: { key: doc2animalResponse.data.idDoc2Animal} });

                    // Restul codului după ce cererea este finalizată cu succes.
                }).catch((doc2animalError: any) => {
                    console.error("Error find any insertion with these ids:", doc2animalError);
                });
            } else {
                setOpen5(true);
                console.error("Doctor ID not found in the response:", response.data);
            }
        }).catch((error: any) => {
            console.error("Error fetching doctor:", error);
        });
    };

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
        },
        d2a : [],
        animale:[]
    });
    const handleSendClick = () => {
        // Obiect pentru căutarea doctorului
        const searchDoctor = {
            nume: numeDoctor,
            prenume: prenumeDoctor
        };

        // Cerere pentru a găsi doctorul
        axios.post("http://localhost:8081/Doctor/findByNumeAndPrenume", searchDoctor, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            const doctorId = response.data.idDoctor;
            if (doctorId) {
                console.log(doctorId);
                console.log(animalId);

                // Obiect pentru a fi inserat în doc2animal
                const doc2animalData = {
                    idDoctor: doctorId,
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
                        console.log("doctor gasit: ",doc2animalResponse.data);
                        // Obiect pentru căutarea doctorului
                        const addFeedDoctor = {
                            idDoctor:doc2animalResponse.data.idDoctor,
                            feedback:feedbackDoctor
                        };
                        console.log("dupa ce caut: ",addFeedDoctor);
                        // Cerere pentru a găsi doctorul
                        axios.post("http://localhost:8081/Doctor/AddFeedbackToDoctor", addFeedDoctor, {
                            headers: {
                                "content-type": "application/json"
                            }
                        }).then((response: any) => {
                            const doctorData = response.data;
                            if (doctorData) {
                                console.log("doctorul:",doctorData);
                                setDoctor(doctorData);
                            } else {
                                console.error("Doctor ID not found in the response:", response.data);
                            }
                        }).catch((error: any) => {
                            console.error("Error fetching doctor:", error);
                        });

                    } else {
                        console.error("Don't find any inseration with these ids:", response.data);
                    }

                    // Restul codului după ce cererea este finalizată cu succes.
                }).catch((doc2animalError: any) => {
                    console.error("Error find any insertion with these ids:", doc2animalError);
                });
            } else {
                console.error("Doctor ID not found in the response:", response.data);
                setOpen6(true);
            }
        }).catch((error: any) => {
            console.error("Error fetching doctor:", error);
        });
    };

    function renderRowFeedDoctor(props: ListChildComponentProps) {
        const { index, style } = props;
        const feedback = doctor.feedback[index];
        return (
            <ListItem style={{ ...style, marginLeft: '-20px' }} key={index} component="div" disablePadding>
                <ListItemButton>
                    <ListItemText style={{ marginLeft: '20px' }} primary={feedback} />
                </ListItemButton>
            </ListItem>
        );
    }
    const handleViewClick = () => {

        // Obiect pentru căutarea doctorului
        const searchDoctor = {
            nume: numeDoctor,
            prenume: prenumeDoctor
        };

        // Cerere pentru a găsi doctorul
        axios.post("http://localhost:8081/Doctor/findByNumeAndPrenume", searchDoctor, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            const doctorData = response.data;
            if (doctorData && doctorData.utilizator) {
                console.log(doctorData);
                setDoctor(doctorData);
            } else {
                console.error("Doctor ID not found in the response:", response.data);
                setOpen4(true);
            }
        }).catch((error: any) => {
            console.error("Error fetching doctor:", error);
        });
    };
    return (
        <div style={MainStyle}>
            <div style={ContainerAnimalProfil}>
                <div style={{marginTop:-20,fontFamily:"TimesNewRoman", fontSize:30}}>
                    <p>
                        My Animal Profile
                    </p>
                    <TextField id="nume" label="Nume" variant="outlined" value={nume} onChange={handleChangeNume} style={{ marginTop:-10 , marginLeft: 0, backgroundColor:"whitesmoke",opacity:0.7 }}/>
                    <TextField id="rasa" label="Rasa" variant="outlined" value={rasa} onChange={handleChangeRasa} style={{marginTop:20 ,  marginLeft: 0 , backgroundColor:"whitesmoke",opacity:0.7}}/>
                    <TextField id="varsta" label="Varsta" variant="outlined" value={varsta} onChange={handleChangeVarsta} style={{ marginTop:20 , marginLeft: 0 , backgroundColor:"whitesmoke",opacity:0.7}}/>
                    <TextField id="sex" label="Sex" variant="outlined" value={sex} onChange={handleChangeSex} style={{ marginTop:20 , marginLeft: 0, backgroundColor:"whitesmoke",opacity:0.7 }}/>
                    <TextField id="nrCip" label="Numar CIP" variant="outlined" value={nrCip} onChange={handleChangeNrCip} style={{ marginTop:20 , marginLeft: 0 , backgroundColor:"whitesmoke",opacity:0.7}} />
                    <TextField id="tipAnimal" label="Tip Animal" variant="outlined" value={tipAnimal} onChange={handleChangeTipAnimal} style={{ marginTop:20 , marginLeft: 0 , backgroundColor:"whitesmoke",opacity:0.7}} />
                    <TextField id="steril" label="Steril(Da/Nu/Nu stiu)" variant="outlined"  value={steril} onChange={handleChangeSteril} style={{marginTop:20 ,  marginLeft: 0, backgroundColor:"whitesmoke",opacity:0.7 }}/>
                    <Button style={{...updateButtonStyle, marginTop:90 ,  marginLeft: -230,}} onClick={handleClick} variant="contained">Update Your Data</Button>
                </div>
            </div>

            <div style={parent2DivStyle}>
                <p style={{marginTop:30,fontFamily:"TimesNewRoman", fontSize:20, marginLeft:20}}> The feedback I received</p>
                <Box
                    sx={{ width: '90%', height: 200, maxWidth: 360, bgcolor: 'background.paper', marginLeft:2}}>
                    <FixedSizeList
                        height={190}
                        width={360}
                        itemSize={46}
                        itemCount={animal.feedbacks.length}
                        overscanCount={5}
                    >
                        {renderRow}
                    </FixedSizeList>
                </Box>
            </div>

            <div style={parent1DivStyle}>
                <p style={{marginTop:30,fontFamily:"TimesNewRoman", fontSize:20, marginLeft:20}}>My vouchers</p>
                <p style={{marginTop:-10,fontFamily:"TimesNewRoman", fontSize:15, marginLeft:20}}>Because you are part of the VetHealth family</p>
                <Box
                    sx={{ width: '90%', height: 150, maxWidth: 360, bgcolor: 'background.paper', marginLeft:2}}>
                    <FixedSizeList
                        height={140}
                        width={360}
                        itemSize={46}
                        itemCount={voucherList.length}
                        overscanCount={5}
                    >
                        {({ index, style }) => (
                            <ListItem style={style} key={voucherList[index].idVoucher} component="div" disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={`${voucherList[index].numeVoucher}: ${voucherList[index].valoare} - ${voucherList[index].numeBeneficiar}`} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </FixedSizeList>
                </Box>
            </div>

            <div style={parent4DivStyle}>
                <p style={{marginTop:30,fontFamily:"TimesNewRoman", fontSize:20, marginLeft:20}}>My medical history</p>
                <Box
                    sx={{ width: '90%', height: 160, maxWidth: 370, bgcolor: 'background.paper', marginLeft:2}}>
                    <FixedSizeList
                        height={150}
                        width={360}
                        itemSize={46}
                        itemCount={infoStareList.length}
                        overscanCount={5}
                    >
                        {({ index, style }) => (
                            <ListItem style={style} key={infoStareList[index].idInfo} component="div" disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={`${infoStareList[index].stare}: ${infoStareList[index].detalii}` } />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </FixedSizeList>
                </Box>
                <div style={ContainerMyDoctorProfil}>
                    <div style={{marginTop:-20,fontFamily:"TimesNewRoman", fontSize:20}}>
                        <p>
                            My Doctor
                        </p>
                        <TextField id="nume" label="Nume" variant="outlined" value={numeD} style={{ marginTop:-10 , marginLeft: 0, backgroundColor:"whitesmoke",opacity:0.7 }}/>
                        <TextField id="prenume" label="Prenume" variant="outlined" value={prenumeD}  style={{marginTop:20 ,  marginLeft: 0 , backgroundColor:"whitesmoke",opacity:0.7}}/>
                    </div>
                </div>
            </div>


            <div style={parent3DivStyle}>
                <p style={{ marginLeft:10,marginTop:5,fontFamily:"TimesNewRoman", fontSize:40}}>
                    Doctors
                </p>
                <Box
                    sx={{  marginLeft:2,width: '100%', height: 200, maxWidth: 360, bgcolor: 'background.paper',marginTop:-3 }}
                >
                    <FixedSizeList
                        height={200}
                        width={350}
                        itemSize={46}
                        itemCount={doctorList.length}
                        overscanCount={5}
                    >
                        {({ index, style }) => (
                            <ListItem style={style} key={doctorList[index].idDoctor} component="div" disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={`${doctorList[index].utilizator.nume} ${doctorList[index].utilizator.prenume}- ${doctorList[index].specializare}`} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </FixedSizeList>
                </Box>
                <p style={{ marginLeft:10,fontFamily:"TimesNewRoman", fontSize:30, marginTop:2}}>
                    Enter the Doctor's Data:
                </p>
                <TextField id="numeDoctor" label="NumeDoctor" variant="outlined" value={numeDoctor} onChange={handleChangeNumeDcotor} style={{ marginLeft: 10, backgroundColor:"whitesmoke",opacity:0.5, marginTop:-20}}/>
                <TextField id="prenumeDoctor" label="PrenumeDoctor" variant="outlined" value={prenumeDoctor} onChange={handleChangePrenumeDcotor} style={{ marginLeft: 10, marginTop:15, backgroundColor:"whitesmoke",opacity:0.5}}/>
                <p >*Send feedback to the doctor mentioned above.</p>
                <TextField id="feedback" label="Feedback" variant="outlined" value={feedbackDoctor} onChange={handleChangeFeedbackDoctor} style={{ marginLeft: 10, marginTop:-10, backgroundColor:"whitesmoke",opacity:0.5}}/>
                <p  style={{ marginTop:5,marginLeft:10,fontFamily:"TimesNewRoman", fontSize:25}}>
                    See the feedback from the doctor you selected
                </p>
                <Box
                    sx={{  marginTop:-3,marginLeft:2, width: '100%', height:120, maxWidth: 360, bgcolor: 'background.paper' }}>
                    <FixedSizeList
                        height={110}
                        width={360}
                        itemSize={46}
                        itemCount={doctor.feedback.length}
                        overscanCount={5}
                    >
                        {renderRowFeedDoctor}
                    </FixedSizeList>
                </Box>
                <Button style={{...selectButtonStyle, marginTop:300, marginLeft: 250}} onClick={handleSelectClick} variant="contained">Select doctor</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <ModalContent sx={[styleM, { width: '240px' }]}>
                        <h2>
                            Doctor not found!
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
                            The doctor you selected was assigned to your animal.
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
                            The doctor you selected already has this animal.
                        </h2>
                        <ModalButton onClick={handleClose}>Close</ModalButton>
                    </ModalContent>
                </Modal>

                <Button style={{...openButtonStyle, marginTop:350, marginLeft: 250} } onClick={handleOpenClick}  variant="contained">Open chat</Button>
                <Modal
                    open={open5}
                    onClose={handleClose}
                >
                    <ModalContent sx={[styleM, { width: '240px' }]}>
                        <h2>
                            Doctor not found! Could not open the chat.
                        </h2>
                        <ModalButton onClick={handleClose}>Close</ModalButton>
                    </ModalContent>
                </Modal>
                <Button style={{...openButtonStyle, marginTop:400, marginLeft: 250} } onClick={handleViewClick} variant="contained">View feedback</Button>
                <Modal
                    open={open4}
                    onClose={handleClose}
                >
                    <ModalContent sx={[styleM, { width: '240px' }]}>
                        <h2>
                            Doctor not found! Feedback not available.
                        </h2>
                        <ModalButton onClick={handleClose}>Close</ModalButton>
                    </ModalContent>
                </Modal>
                <Button style={{...ButtonStyle, marginTop:490, marginLeft: 250} } onClick={handleSendClick} variant="contained"> Send feedback</Button>
                <Modal
                    open={open6}
                    onClose={handleClose}
                >
                    <ModalContent sx={[styleM, { width: '240px' }]}>
                        <h2>
                            Doctor not found! Could not send feedback.
                        </h2>
                        <ModalButton onClick={handleClose}>Close</ModalButton>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    );

};