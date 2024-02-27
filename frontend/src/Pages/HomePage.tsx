import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {
    BlogParagraphStyle, ButtonClose, ButtonLogIn,
    ButtonSearch,
    ButtonStyle, InfoParagraphStyle,
    ListaContainerStyle,
    LogoContainerStyle,
    MainStyle, SearchOverlayStyle, SearchResultsStyle,
    StackStyle,
    TitluApp
} from "./HomePage.styles";
import {alpha, Button, InputBase, Link, Stack, styled} from "@mui/material";
// import  SearchIcon from '@mui/icons-material/Search';

import vaccinare from "./vaccinare.jpeg";
import congres from "./congres.jpeg";
import wildHorses from "./wildHorses.jpeg";

import phone from "./phone.png";
import mail from "./mail.png";
import clock from "./clock.png";
import locatie from "./locatie.svg";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    height:'20%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '30ch',
            },
        },
    },
}));
const BlogTextComponent_vaccinare = (): JSX.Element => {
    const url_vaccinare = 'https://www.medicinaveterinara.com/post/vaccinarea-c%C3%A2inilor-%C8%99i-a-pisicilor';
    //const imageUrl = 'vaccinare.jpg'; // înlocuiți cu calea reală a imaginii

    return (
        <div style={{ ...ListaContainerStyle, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>.

            <img src={vaccinare} alt="Imagine Descriptivă" style={{ maxWidth: '20%', marginTop: '0px' }} />
            <p style={{ ...BlogParagraphStyle, marginLeft: '10px' }}>
                Atunci când decidem să ne luăm un animăluț de companie,
                trebuie să ținem cont de anumite aspecte ce țin de sănătatea acestuia,
                iar prima etapă este vaccinarea acestuia.{' '}
                <a href={url_vaccinare} target="_blank" rel="noopener noreferrer">
                    Vaccinarea câinilor și a pisicilor
                </a>
            </p>
        </div>

    );
};
const BlogTextComponent_congres = (): JSX.Element => {
    const url_congres = 'https://www.usamvcluj.ro/congresul-anual-al-asociatiei-veterinare-ecvine-din-romania-la-usamv-cluj-napoca-intre-11-14-mai-2023/';
    //const imageUrl = 'vaccinare.jpg'; // înlocuiți cu calea reală a imaginii

    return (
        <div style={{ ...ListaContainerStyle, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>.

            <img src={congres} alt="Imagine Descriptivă" style={{ maxWidth: '40%', marginTop: '0px' }} />
            <p style={{ ...BlogParagraphStyle, marginLeft: '10px' }}>
                Congresul anual al Asociației Veterinare Ecvine din România, la USAMV Cluj-Napoca, între 11-14 mai 2023!.{' '}
                <a href={url_congres} target="_blank" rel="noopener noreferrer">
                    Congresul AVER
                </a>
            </p>
        </div>

    );
};

const BlogTextComponent_wildHorses = (): JSX.Element => {
    const url_wildHorses = 'https://www.newlebadaresort.com/caii-salbatici-din-padurea-letea/';

    return (
        <div style={{ ...ListaContainerStyle, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>.

            <img src={wildHorses} alt="Imagine Descriptivă" style={{ maxWidth: '25%', marginTop: '0px' }} />
            <p style={{ ...BlogParagraphStyle, marginLeft: '10px' }}>
                În Pădurea Letea trăiesc circa 2500 de cai sălbatici, care își petrec timpul pe o suprafață protejată de 2800 de hectare.{' '}
                <a href={url_wildHorses} target="_blank" rel="noopener noreferrer">
                    Caii din Padurea Letea
                </a>
            </p>
        </div>

    );
};

// Adăugați această linie la începutul fișierului sau la începutul componentei
type Page = {
    id: number;
    title: string;
    url: string;
};

export const HomePage = (): JSX.Element => {
    const navigate = useNavigate();
    const handleLoginButtonClick = () => {
        // Navighează către ruta "/Login" când butonul de login este apăsat
        navigate("/LoginPage");
    };
    const handleAboutUsButtonClick = () => {
        // Navighează către ruta "/Login" când butonul de login este apăsat
        navigate("/AboutUs");
    };
    const handleSigninButtonClick = () => {
        // Navighează către ruta "/Login" când butonul de login este apăsat
        navigate("/SigninPage");
    };
    const BlogTextComponent_logo = (): JSX.Element => {
        return (
            <div style={{ ...LogoContainerStyle, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>.
                <Button onClick={handleLoginButtonClick} sx={ButtonLogIn}>Login</Button>
            </div>

        );
    };
    // return <div style ={MainStyle}>
        {/*<h1 style={TitluApp}> Vet </h1>*/}
        {/*<Stack direction="row" style={StackStyle}>*/}
        {/*    <Button sx={ButtonStyle}>Blog</Button>*/}
        {/*    <Button sx={ButtonStyle}>AboutUs</Button>*/}
        {/*    /!*<Button sx={ButtonStyle}>Search</Button>*!/*/}
        {/*    <Search>*/}
        {/*        <SearchIconWrapper>*/}
        {/*            /!*<SearchIcon />*!/*/}
        {/*        </SearchIconWrapper>*/}
        {/*        <StyledInputBase*/}
        {/*            placeholder="Search…"*/}
        {/*            inputProps={{ 'aria-label': 'search' }}*/}
        {/*        />*/}
        {/*    </Search>*/}
        {/*    <Button onClick={handleLoginButtonClick} sx={ButtonStyle}>Login</Button>*/}

        {/*</Stack>*/}

    // </div>
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Page[]>([]);
    const [showSearchOverlay, setShowSearchOverlay] = useState(false);

    // Simulăm o listă de pagini pentru testare
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const term = event.target.value;
        setSearchTerm(term);

        const url_congres = 'https://www.usamvcluj.ro/congresul-anual-al-asociatiei-veterinare-ecvine-din-romania-la-usamv-cluj-napoca-intre-11-14-mai-2023/';
        const url_pisica_acasa='https://mobilepet.ro/blog/5-lucruri-pe-care-trebuie-sa-le-stii-cand-lasi-pisica-singura-acasa/';
        const url_contagioase='https://mobilepet.ro/blog/cele-mai-contagioase-boli-canine/'
        const url_babypisi='https://mobilepet.ro/blog/lucruri-interesante-puii-pisica/'
        const url_artrita_a='https://mobilepet.ro/blog/ameliorezi-simptomele-artritei-caini/'
        const url_boli_a='https://mobilepet.ro/blog/4-boli-ale-cainilor-care-sunt-stransa-legatura-cu-alimentatia/'
        const url_artrita_pisi='https://mobilepet.ro/blog/semne-pisica-artrita/'
        // Folosește paginile reale din aplicația ta
        const pages: Page[] = [
            { id: 1, title: 'Congres AVER', url: url_congres },
            { id: 2, title: 'Sfaturi cand lasam Pisica acasa', url: url_pisica_acasa },
            { id: 3, title: 'Boli contagioase: Cele mai contagioase boli canine', url: url_contagioase },
            { id: 4, title: 'Despre puii de pisica', url: url_babypisi },
            { id: 5, title: 'Artrita : ameliorarea simptomelor pentru caini', url: url_artrita_a },
            { id: 6, title: 'Boli care sunt influentate de alimentatie', url: url_boli_a },
            { id: 7, title: 'Artrita: 7 Semne ca pisica ta are artrita', url: url_artrita_pisi },

            // ... alte pagini reale
        ];

        const filteredResults = pages.filter((page) => page.title.toLowerCase().includes(term.toLowerCase()));
        setSearchResults(filteredResults);
    };


    const handleSearchClick = () => {
        if (searchTerm.trim() !== '') {
            setShowSearchOverlay(true);
        }
    };

    const handleCloseOverlay = () => {
        setShowSearchOverlay(false);
    };


    return <div style ={MainStyle}>
        {/*<h1 style={TitluApp}> Vet </h1>*/}

        <Stack direction="row" style={StackStyle}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop:'0px' }}>
                <img src={phone} alt="Imagine Descriptivă" style={{ maxWidth: '5%', marginLeft:'10px', marginRight:'-80px'}} />
                <p style={InfoParagraphStyle}>0756819930</p>
                <img src={mail} alt="Imagine Descriptivă" style={{ maxWidth: '5%', marginLeft:'10px', marginRight:'-80px'  }} />
                <p style={InfoParagraphStyle}>ioanahad03@gmail.com</p>
                <img src={clock} alt="Imagine Descriptivă" style={{ maxWidth: '5%', marginLeft:'10px', marginRight:'-80px'  }} />
                <p style={InfoParagraphStyle}>24/7</p>
                <img src={locatie} alt="Imagine Descriptivă" style={{ maxWidth: '5%', marginLeft:'10px', marginRight:'-80px'  }} />
                <p style={InfoParagraphStyle}>CLUJ NAPOCA, CALEA MANASTUR 3</p>

            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '30px' }}>

                {/*<img src={animale} alt="Imagine Descriptivă" style={{ maxWidth: '40%', alignItems:'left' , marginLeft:-900, marginRight:'10px',borderRadius: '10px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.9)',}} />*/}
                <Button sx={ButtonStyle} onClick={handleAboutUsButtonClick} >About Us</Button>

                <Search>
                    <SearchIconWrapper>
                        {/*<SearchIcon />*/}
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        value={searchTerm}
                        onChange={handleSearchChange}
                        sx={{ width:'800px', height:'60px',}}
                    />
                </Search>
                <Button sx={ButtonSearch} onClick={handleSearchClick}>
                    Search
                </Button>
                {showSearchOverlay && (
                    <div style={SearchOverlayStyle}>
                        {/* Afișează rezultatele căutării */}
                        <ul style={SearchResultsStyle}>
                            {searchResults.map((page) => (
                                <li key={page.id}>
                                    <a href={page.url} target="_blank" rel="noopener noreferrer" onClick={handleCloseOverlay}>
                                        {page.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        {/* Buton pentru închiderea containerului de rezultate */}
                        <Button sx={ButtonClose} onClick={handleCloseOverlay}>Close</Button>
                    </div>
                )}
                {/* Restul componentei HomePage */}
                <Button sx={ButtonStyle} onClick={handleSigninButtonClick}>SIGN IN</Button>
            </div>
        </Stack>
        <BlogTextComponent_vaccinare/>
        <BlogTextComponent_congres/>
        {/*<BlogTextComponent_wildHorses/>*/}
        <BlogTextComponent_logo/>

    </div>
}