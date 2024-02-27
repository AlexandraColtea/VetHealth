import React, { useEffect } from 'react';
import {
    ContainerCreateContDoctor,
    ContainerSignIn,
    MainStyle,
    SignButtonStyle,
    UpdateAdminAccButtonStyle,
    UpdateDoctorAccButtonStyle,
    UpdatePacientAccButtonStyle,
    AddVoucherButtonStyle,
    LogoutButtonStyle
} from "./AdminPage.styles";
import axios from "axios";
import {Button, TextField} from '@mui/material';
import {useLocation, useNavigate} from "react-router-dom";
export const AdminPage = (): JSX.Element => {
    const navigate=useNavigate();
    const location=useLocation();
    const userId = parseInt(location.state?.key, 10);
    const handleClick =()=> {
        navigate("/CreareConturiPage",{ state: { key: userId } });
    }
    const handleUpdateAClick =()=> {
        navigate("/UpdateAdminPage",{ state: { key: userId } });
    }
    const handleUpdateDClick =()=> {
        navigate("/UpdateDoctorPage",{ state: { key: userId } });
    }
    const handleUpdatePClick =()=> {
        navigate("/UpdatePacientPage",{ state: { key: userId } });
    }
    const handleAddVClick =()=> {
        navigate("/AddVoucherPage",{ state: { key: userId } });
    }
    const handleLogoutClick =()=> {
        navigate("/LoginPage" );
    }
    return (
        <div style={MainStyle}>
            <Button style={SignButtonStyle} onClick={handleClick}>Create accounts</Button>
            <Button style={UpdateAdminAccButtonStyle} onClick={handleUpdateAClick}>Edit admin's accounts</Button>
            <Button style={UpdateDoctorAccButtonStyle} onClick={handleUpdateDClick}>Edit doctor's accounts</Button>
            <Button style={UpdatePacientAccButtonStyle} onClick={handleUpdatePClick}>Edit pacient's accounts</Button>
            <Button style={AddVoucherButtonStyle} onClick={handleAddVClick}>Add voucher animal</Button>
            <Button style={LogoutButtonStyle} onClick={handleLogoutClick}>Logout</Button>
        </div>
    );

};