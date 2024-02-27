import {
    adminInterface,
    ContainerEdit,
    ContainerUpdate, DeleteButtonStyle,
    MainStyle,
    SelectButtonStyle,
    utilizatorInterface
} from "./UpdateAdminPage.styles";
import React, {useEffect} from "react";
import {ContainerSignIn} from "./UpdateAdminPage.styles";
import {Box, Button, ListItem, ListItemButton, ListItemText, TextField} from "@mui/material";
import {FixedSizeList, ListChildComponentProps} from "react-window";
import axios from "axios";
import {SignButtonStyle} from "./UpdateAdminPage.styles";
import {pacientInterface} from "./PacientPage.styles";

export const UpdateAdminPage = (): JSX.Element => {

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

    const [adminList, setAdminList] = React.useState<adminInterface[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8081/Admin/All", {
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response: any) => {
                console.log(response.data);
                const adminsData = response.data;
                setAdminList(adminsData);
            })
            .catch((error: any) => {
                console.error("Error fetching admin list:", error);
            });
    }, []); // [] asigură că acest efect se execută doar la încărcarea componentei
    let idAd=0;
    const [admin, setAdmin] = React.useState<adminInterface>({
        idAdmin: 0,
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
        const selectA={
            nume:numeSearch,
            prenume:prenumeSearch,
        }
        //request post
        axios.post("http://localhost:8081/Admin/findByNumeAndPrenume", selectA, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            // elena a dat return response, si eu am selectatsa se afuseze doar data
            const adminData=response.data;
            if(adminData && adminData.utilizator){
                idAd=adminData.idAdmin;
                console.log(adminData);
                setAdmin(adminData);
                setNume(adminData.utilizator.nume);
                setPrenume(adminData.utilizator.prenume);
                setAdresa(adminData.utilizator.adresa);
                setEmail(adminData.utilizator.email);
                setNrTel(adminData.utilizator.nrTel);
                setParola(adminData.utilizator.parola);
            }
            else{
                console.error("you need to select an existing admin");
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
        axios.post("http://localhost:8081/Admin/findByNumeAndPrenume", selectA, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            // elena a dat return response, si eu am selectatsa se afuseze doar data
            const adminData=response.data;
            if(adminData && adminData.utilizator){
                idAd=adminData.idAdmin;
                console.log("admin de sters: ",idAd);
                axios.post("http://localhost:8081/Admin/Delete", idAd, {
                    headers: {
                        "content-type": "application/json"
                    }
                 });
            }
            else{
                console.error("you need to select an existing admin");
            }
        })

    }

    const handleUpdateClick =()=> {
        //obiect
        const updateA={
            idAdmin:admin.idAdmin,
            nume:nume,
            prenume:prenume,
            adresa:adresa,
            email:email ,
            nrTel:nrTel,
            parola:parola
        }
        console.log(updateA);
        //request post
        axios.post("http://localhost:8081/Admin/UpdateCont", updateA, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            // elena a dat return response, si eu am selectatsa se afuseze doar data
            const adminData=response.data;
            if(adminData && adminData.utilizator){
                idAd=adminData.idAdmin;
                console.log(adminData);
                setAdmin(adminData);
                setNume(adminData.utilizator.nume);
                setPrenume(adminData.utilizator.prenume);
                setAdresa(adminData.utilizator.adresa);
                setEmail(adminData.utilizator.email);
                setNrTel(adminData.utilizator.nrTel);
                setParola(adminData.utilizator.parola);
            }
            else{
                console.error("the admin account can't be updated: "+response.data);
            }
        })

    }

    return (
        <div style={MainStyle}>
            <div style={{ ...ContainerSignIn, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Admins</p>
                <Box
                    sx={{ width: '100%', height: 180, maxWidth: 400, bgcolor: 'background.paper' }}
                >
                    <FixedSizeList
                        height={170}
                        width={360}
                        itemSize={46}
                        itemCount={adminList.length}
                        overscanCount={5}
                    >
                        {({ index, style }) => (
                            <ListItem style={style} key={adminList[index].idAdmin} component="div" disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={`${adminList[index].utilizator.nume} ${adminList[index].utilizator.prenume} ${adminList[index].utilizator.email}`} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </FixedSizeList>
                </Box>
            </div>
            <div style={{ ...ContainerEdit, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Select admin to edit</p>
                <TextField id="numeSearch" label="NumeSearch" variant="outlined" value={numeSearch} onChange={handleChangeNumeSearch} />
                <TextField id="prenumeSearch" label="PrenumeSearch" variant="outlined" value={prenumeSearch} onChange={handleChangePrenumeSearch} />
                <Button style={SelectButtonStyle} onClick={handleClick}>Select</Button>
                <Button style={DeleteButtonStyle} onClick={handleDeleteClick}>Delete</Button>
            </div>
            <div style={{ ...ContainerUpdate, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Edit an Admin Account</p>
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