import React, { useEffect } from 'react';
import {d2aInterface, MainStyle, openButtonStyle, utilizatorInterface} from "./ChatPage.styles";
import {useLocation, useNavigate} from "react-router-dom";
import {Box, Button, ListItem, ListItemButton, ListItemText, TextField} from "@mui/material";
import axios from "axios";
import {ContainerSignIn} from "./ChatPage.styles";
import {FixedSizeList, ListChildComponentProps} from "react-window";
export const ChatPage = (): JSX.Element => {
    const navigate = useNavigate();
    const location = useLocation();
    const { getAnimal, getD2a, dsaua } = location.state;

    const [mesaj, setMesaj] = React.useState("");
    const handleChangeMesaj = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setMesaj(event.target.value);
    }
    const [d2a, setD2a] = React.useState<d2aInterface>({
        idDoc2Animal: getD2a.idDoc2Animal,
        idDoctor: getD2a.idDoctor,
        idAnimal: getD2a.idAnimal,
        mesaje: [],
    });

    const handleOpenClick = () => {
        const inserareMsg = {
            idD2A: getD2a.idDoc2Animal,
            numeAnimal: getAnimal.nume,
            mesaj: mesaj,
            dsaua: dsaua
        };
        console.log("aicii ",inserareMsg)
        axios.post("http://localhost:8081/Doc2Animal/InsertMesFromAnimal", inserareMsg, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            if (response.data) {
                setD2a(response.data);
                setMesaj(""); // Clear input after sending message
            } else {
                console.error("Failed to insert message:", response.data);
            }
        }).catch((error: any) => {
            console.error("Error:", error.message);
        });
    };

    function renderRow(props: ListChildComponentProps) {
        const { index, style } = props;
        const mesaj = d2a.mesaje[index];
        return (
            <ListItem style={{ ...style, marginLeft: '-20px' }} key={index} component="div" disablePadding>
                <ListItemButton>
                    <ListItemText style={{ marginLeft: '20px' }} primary={mesaj} />
                </ListItemButton>
            </ListItem>
        );
    }
    useEffect(() => {
        // Cerere pentru a aduce mesajele asociate idDoc2Animal
        axios.post("http://localhost:8081/Doc2Animal/FindByIdDoc2Animal",  getD2a.idDoc2Animal , {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            const d2aData = response.data;
            if (d2aData) {
                setD2a(d2aData);
            }
        }).catch((error: any) => {
            console.error("Error:", error.message);
        });
    }, [getD2a.idDoc2Animal]);  // Asigurați-vă că efectul este apelat când se schimbă idDoc2Animal

    return (
        <div style={MainStyle}>
            <div style={{ ...ContainerSignIn, top: '10%', opacity: 0.7, fontFamily: 'TimesNew, serif' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', color: 'black', marginTop: '0px' }}>Conversation</p>
                <Box
                    sx={{ width: '100%', height: 400, maxWidth: 750, bgcolor: 'background.paper' }}
                >
                    <FixedSizeList
                        height={380}
                        width={360}
                        itemSize={46}
                        itemCount={d2a.mesaje.length}
                        overscanCount={5}
                    >
                        {renderRow}
                    </FixedSizeList>
                </Box>
                <TextField id="mesaj" label="Mesaj" variant="outlined" value={mesaj} onChange={handleChangeMesaj} style={{ marginLeft: -105, marginTop: 220, backgroundColor: "beige", opacity: 0.9, width: 680 }} />
                <Button style={openButtonStyle} onClick={handleOpenClick} variant="contained">Send</Button>
            </div>
        </div>
    );
};