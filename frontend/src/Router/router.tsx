import { RouteObject, createBrowserRouter } from "react-router-dom";
import {HomePage} from "../Pages/HomePage";
import {LoginPage} from "../Pages/LoginPage";
import {SigninPage} from '../Pages/SigninPage';
import {AddAnimalPage} from "../Pages/AddAnimal";
import {PacientPage} from "../Pages/PacientPage";
import {DoctorPage} from "../Pages/DoctorPage";
import {AnimalPage} from "../Pages/AnimalPage";
import {ChatPage} from "../Pages/ChatPage";
import {AdminPage} from "../Pages/AdminPage";
import {CreareConturiPage} from "../Pages/CreareConturiPage";
import {UpdateAdminPage} from "../Pages/UpdateAdminPage";
import {UpdateDoctorPage} from "../Pages/UpdateDoctorPage";
import {UpdatePacientPage} from "../Pages/UpdatePacientPage";
import {AboutUs} from "../Pages/AboutUs";
import {DoctorsAnimals} from "../Pages/DoctorsAnimals";
import {AddVoucherPage} from "../Pages/AddVoucherPage";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/HomePage",
        element: <HomePage />
    },
    {
        path: "/LoginPage",
        element: <LoginPage />
    },
    {
        path: "/SigninPage",
        element: <SigninPage />
    },
    {
        path: "/PacientPage",
        element: <PacientPage />
    },
    {
        path: "/AnimalPage",
        element: <AnimalPage />
    },
    {
        path: "/ChatPage",
        element: <ChatPage />
    },
    {
        path: "/DoctorPage",
        element: <DoctorPage />
    },
    {
        path: "/AddAnimal",
        element: <AddAnimalPage />
    },
    {
        path: "/AdminPage",
        element: <AdminPage />
    },
    {
        path: "/CreareConturiPage",
        element: <CreareConturiPage />
    },
    {
        path: "/UpdateAdminPage",
        element: <UpdateAdminPage />
    },
    {
        path: "/UpdateDoctorPage",
        element: <UpdateDoctorPage/>
    },
    {
        path: "/UpdatePacientPage",
        element: <UpdatePacientPage/>
    },
    {
        path: "/AboutUS",
        element: <AboutUs/>
    },
    {
        path: "/DoctorsAnimals",
        element: <DoctorsAnimals/>
    },
    {
        path: "/AddVoucherPage",
        element: <AddVoucherPage/>
    }


];

export const router = createBrowserRouter(routes)