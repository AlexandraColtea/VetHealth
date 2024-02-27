import React, { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {Box, Button, ListItem, ListItemButton, ListItemText, Modal, TextField} from "@mui/material";
import {
    MainStyle,
    pacientInterface,
    parentDivStyle,
    myAnimalsLabel,
    updateButtonStyle,
    searchTFieldstyle,
    LogoutButtonStyle,
    AnimalContainerStyle, ProfilContainerStyle, RightContainerStyle, AnimalButtonStyle
} from "./PacientPage.styles";
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import {ModalButton, ModalContent, styleM} from "./LoginPage.style";
export const PacientPage = (): JSX.Element => {
    const navigate = useNavigate();
    const location = useLocation();
    const utilizatorId = parseInt(location.state?.key, 10);


    const [nume, setNume ]= React.useState("");
    const [prenume, setPrenume ]= React.useState("");
    const [adresa, setAdresa ]= React.useState("");
    const [email, setEmail ]= React.useState("");
    const [nrTel, setNrTel ]= React.useState("");
    const [parola, setParola ]= React.useState("");
    const[numeAnimal,setNumeAnimal]=React.useState("");
    // se pune in mail/pass ce se scrie in text field
    const handleChangeAnimalNume=( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNumeAnimal(event.target.value);
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
    const handleClick =()=> {
        //obiect
        const updateData={
            idPacient:pacient.idPacient,
            nume:nume,
            prenume:prenume,
            adresa:adresa,
            email:email ,
            nrTel:nrTel,
            parola:parola
        }
        //request post
        axios.post("http://localhost:8081/Pacient/UpdateCont", updateData, {
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
            console.error("Error updating Pacient:", error);
        });
    }
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleSelectClick =()=> {
        //obiect

        const searchAnimal={
            idPacient:pacient.idPacient,
            nume:numeAnimal
        }
        console.log(searchAnimal);
        //request post
        axios.post("http://localhost:8081/Animal/GetByNumeAndIdPacient", searchAnimal, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            const animalId = response.data.idAnimal; // Verificați dacă data.idAnimal există
            if (animalId) {
                console.log(animalId);
                navigate("/AnimalPage", { state:response.data });
            } else {
                setOpen(true);
            }
        }).catch((error: any) => {
            console.error("Error fetching animal:", error);
        });
    }
    const handleAddClick =()=> {
        navigate("/AddAnimal",{state:{key:pacient.idPacient}});
    }

    const [pacient, setPacient] = React.useState<pacientInterface>({
        idPacient: 0,
        utilizator: {
            utilizatorId: utilizatorId,
            nume: '',
            prenume: '',
            adresa: '',
            email: '',
            nrTel: '',
            parola: '',
        },
        animale: []
    });

    function renderRow(props: ListChildComponentProps) {
        const { index, style } = props;
        const animal = pacient.animale[index];
        return (
            <ListItem style={style} key={animal.idAnimal} component="div" disablePadding>
                <ListItemButton>
                    <ListItemText primary={animal.nume} />
                </ListItemButton>
            </ListItem>
        );
    }

    useEffect(() => {
        console.log(utilizatorId);
        axios.post("http://localhost:8081/Pacient/GetByUtilizatorId", utilizatorId, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            console.log(response.data);
            const pacientData = response.data;
            // Set the state with values from the pacient object
            if (pacientData && pacientData.utilizator) {
                setPacient(pacientData);
                setNume(pacientData.utilizator.nume);
                setPrenume(pacientData.utilizator.prenume);
                setAdresa(pacientData.utilizator.adresa);
                setEmail(pacientData.utilizator.email);
                setNrTel(pacientData.utilizator.nrTel);
                setParola(pacientData.utilizator.parola);
            }
        });
    }, [utilizatorId]);

    const handleLogoutClick =()=> {
        navigate("/LoginPage" );
    }

    return (
        <div style={MainStyle}>

            <div style={AnimalContainerStyle}>
                <p style={{ fontFamily:"Times New Roman", fontSize:30, marginTop:'70px'}}>  My Animals</p>
                <div style={parentDivStyle}>

                    <Box
                        sx={{ width: '100%', height: 400, maxWidth: 370, bgcolor: 'background.paper',marginLeft:'40px', marginTop:'50px' }}
                    >
                        <FixedSizeList
                            height={390}
                            width={370}
                            itemSize={46}
                            itemCount={pacient?.animale?.length || 0} // Am ajustat itemCount-ul
                            overscanCount={5}
                        >
                            {renderRow}
                        </FixedSizeList>
                    </Box>
                </div>
            </div>

            <div style={{...ProfilContainerStyle,    marginTop:-550}}>

                {/*<label style={updateLabel} >*/}
                <p style={{ fontFamily:"Times New Roman", fontSize:30}}>  My Profile</p>
                {/*</label>*/}

                <div>
                    <div style={{ marginTop:'20px' }}>
                        {/*<label style={nameLabel} >*/}
                        {/* <p>Last name:</p>*/}
                        {/*</label>*/}
                        <TextField id="nume" label="Nume" variant="outlined" value={nume} onChange={handleChangeNume} style={{ marginLeft: 30, marginTop:0 }}/>
                    </div>
                    <div style={{ marginTop: 5 }}>
                        {/*<label style={nameLabel} >*/}
                        {/*First name:*/}
                        {/* </label>*/}
                        <TextField id="prenume" label="Prenume" variant="outlined" value={prenume} onChange={handleChangePrenume} style={{ marginLeft: 30 }}/>
                    </div>
                    <div style={{ marginTop: 5 }}>
                        {/*<label style={nameLabel} >*/}
                        {/*Address:*/}
                        {/*</label>*/}
                        <TextField id="adresa" label="Adresa" variant="outlined" value={adresa} onChange={handleChangeAdresa} style={{ marginLeft: 30 }}/>
                    </div>
                    <div style={{ marginTop: 5 }}>
                        {/*<label style={nameLabel} >*/}
                        {/*Email:*/}
                        {/*</label>*/}
                        <TextField id="email" label="Email" variant="outlined" value={email} onChange={handleChangeEmail} style={{ marginLeft: 30 }}/>
                    </div>
                    <div style={{ marginTop: 5 }}>
                        {/*<label style={nameLabel} >*/}
                        {/*No. tel:*/}
                        {/*</label>*/}
                        <TextField id="nrTel" label="NrTel" variant="outlined" value={nrTel} onChange={handleChangeNrTel} style={{ marginLeft: 30 }}/>
                    </div>
                    <div style={{ marginTop: 5 }}>
                        {/*<label style={nameLabel} >*/}
                        {/*    Password:*/}
                        {/*</label>*/}
                        <TextField id="parola" label="Parola" variant="outlined" value={parola} onChange={handleChangeParola} style={{ marginLeft:30 }}/>
                    </div>

                    <Button style={updateButtonStyle} onClick={handleClick} variant="contained">Update Your Data</Button>
                </div>
            </div>
            <div style={{...RightContainerStyle,    marginTop:-310}}>

                {/*<label style={selectAnimalLabel} >*/}
                <p style={{marginTop:'0px', fontFamily:"Times New Roman", fontSize:30}}>Select Animal</p>
                {/*</label>*/}
                {/*<label style={nameSearchLabel} >*/}
                <p style={{marginTop:'0px', fontFamily:"Times New Roman", fontSize:20}} >Name:</p>
                {/*</label>*/}
                {/*<div style={  }>*/}
                <TextField  id="numeAnimal" label="NumeAnimal" variant="outlined" value={numeAnimal} onChange={handleChangeAnimalNume} style={{...searchTFieldstyle, marginLeft: 80, marginTop:40}}/>
                {/*</div>*/}
                <Button style={{...AnimalButtonStyle, marginTop:'100px', marginLeft:'80px'}} onClick={handleSelectClick} variant="contained">Select animal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <ModalContent sx={[styleM, { width: '240px' }]}>
                        <h2>
                            Animal not found
                        </h2>
                        <ModalButton onClick={handleClose}>Close</ModalButton>
                    </ModalContent>
                </Modal>

                {/*<label style={addNAnimalLabel} >*/}
                <p style={{marginTop:'60px', fontFamily:"Times New Roman", fontSize:30}} >Add new animal </p>
                {/*</label>*/}
                <Button style={{...AnimalButtonStyle, marginTop:'220px', marginLeft:'80px'}} onClick={handleAddClick} variant="contained">Add animal</Button>

            </div>
            <Button style={LogoutButtonStyle} onClick={handleLogoutClick}>Logout</Button>
        </div>
    );
};