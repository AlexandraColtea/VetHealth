
import React, {useEffect} from "react";

import {Box, Button, ListItem, ListItemButton, ListItemText, TextField} from "@mui/material";
import {FixedSizeList, ListChildComponentProps} from "react-window";
import axios from "axios";
import {
    animalInterface, ContainerEdit,
    ContainerSignIn,
    d2aInterface,
    infoStareInterface,
    MainStyle, SelectButtonStyle,
    voucherInterface
} from "./AddVoucherPage.styles";


export const AddVoucherPage = (): JSX.Element => {

    const [id, setId ]= React.useState("");
    const [numeV, setNumeV ]= React.useState("");
    const [numeBV, setNumeBV ]= React.useState("");
    const [valoareV, setValoareV ]= React.useState("");

    const [nume, setNume ]= React.useState("");
    const [rasa, setRasa ]= React.useState("");
    const [varsta, setVarsta ]= React.useState("");
    const [sex, setSex ]= React.useState("");
    const [steril, setSteril]= React.useState("");
    const [nrCip, setNrCip]= React.useState("");
    const [tipAnimal, setTipAnimal]= React.useState("");
    // se pune in mail/pass ce se scrie in text field
    const handleChangeId =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setId(event.target.value);
    }
    const handleChangeNumeV =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNumeV(event.target.value);
    }
    const handleChangeNumeBV =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setNumeBV(event.target.value);
    }
    const handleChangeValoareV =( event: {target: {value: React.SetStateAction<string>;};})=> {
        setValoareV(event.target.value);
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

    const [animaleList, setAnimaleList] = React.useState<animalInterface[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8081/Animal/All", {
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response: any) => {
                // console.log(response.data);
                const animalsData = response.data;
                setAnimaleList(animalsData);
            })
            .catch((error: any) => {
                console.error("Error fetching animals list:", error);
            });
    }, []); // [] asigură că acest efect se execută doar la încărcarea componentei
    let idA=0;
    const [animal, setAnimal] = React.useState<animalInterface>({
        idAnimal : 0,
        nume : '',
        rasa : '',
        varsta : 0,
        sex : '',
        steril : '',
        nrCip : '',
        tipAnimal: '',
        idPacient: 0,
        idDoctor: 0,
        feedbacks: [],
        d2a:[],
        istoric:[],
        vouchers:[]
    });
    const handleClick =()=> {
        const animalId=id;//parseInt(id,10);
        console.log("animal id obj: ",animalId);
        //request post
        axios.post("http://localhost:8081/Animal/GetById", animalId, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            console.log(response.data);
            // Set the state with values from the pacient object
            if(response.data){
                idA=response.data.idAnimal;
                console.log(response.data);
                setAnimal(response.data);
                console.log(animal);
                const addV={
                    idAnimal:idA,
                    numeVoucher:numeV,
                    numeBeneficiar:numeBV,
                    valoare:valoareV
                };
                console.log("voucher add: ",addV);
                //request post
                axios.post("http://localhost:8081/Voucher/InsertVoucher", addV
                    , {
                        headers: {
                            "content-type": "application/json"
                        }
                    }).then((response: any) => {
                    console.log(response.data);
                    // elena a dat return response, si eu am selectatsa se afuseze doar data
                    const voucherData=response.data;
                    if(voucherData){
                        console.log(voucherData);
                    }
                    else{
                        console.error("you need to select an valid id");
                    }
                })
            }
            else{
                console.error("you need to select an valid id");
            }
        })

    }


    return (
        <div style={MainStyle}>
            <div style={{ ...ContainerSignIn, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Animals</p>
                <Box
                    sx={{ width: '100%', height: 180, maxWidth: 400, bgcolor: 'background.paper' }}
                >
                    <FixedSizeList
                        height={170}
                        width={360}
                        itemSize={46}
                        itemCount={animaleList.length}
                        overscanCount={5}
                    >
                        {({ index, style }) => (
                            <ListItem style={style} key={animaleList[index].idAnimal} component="div" disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={`${animaleList[index].idAnimal}: ${animaleList[index].nume} `} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </FixedSizeList>
                </Box>
            </div>
            <div style={{ ...ContainerEdit, top:'10%', opacity:0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop:'0px' }}>Select animal to generate voucher</p>
                <TextField id="idAnimal" label="idAnimal" variant="outlined" value={id} onChange={handleChangeId} />
                <TextField id="numeV" label="NumeVoucher" variant="outlined" value={numeV} onChange={handleChangeNumeV} />
                <TextField id="numeBV" label="NumeBeneficiarVoucher" variant="outlined" value={numeBV} onChange={handleChangeNumeBV} />
                <TextField id="valoareV" label="ValoareVoucher" variant="outlined" value={valoareV} onChange={handleChangeValoareV} />
                <Button style={SelectButtonStyle} onClick={handleClick}>Select</Button>
            </div>
        </div>
    );

};