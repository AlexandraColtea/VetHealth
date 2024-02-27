import React from 'react';
import imagB from "./cal.jpg";
export const parentDivStyle: React.CSSProperties ={
    position: "absolute",
    left:600,
    top:100,
}
export const parent1DivStyle: React.CSSProperties ={
    position: "absolute",
    left:350,
    top:400,
    // -----------------
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '300px',
    height: '100vh',
    maxHeight: '260px',
    marginTop: '-80px',
    marginLeft: '-30px',
    opacity: '0.9', // Opacitate crescută
    backgroundColor: 'silver', // Culoare albă
    borderColor: 'dimgray',
    padding: '0px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Umbra sub container
    transition: 'opacity 0.3s ease-in-out', // Efect de tranziție pentru opacitate

}
export const parent2DivStyle: React.CSSProperties ={
    position: "absolute",
    left:350,
    top:90,
    // -----------------
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '300px',
    height: '100vh',
    maxHeight: '300px',
    marginTop: '-80px',
    marginLeft: '-30px',
    opacity: '0.9', // Opacitate crescută
    backgroundColor: 'silver', // Culoare albă
    borderColor: 'dimgray',
    padding: '0px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Umbra sub container
    transition: 'opacity 0.3s ease-in-out', // Efect de tranziție pentru opacitate

}
export const parent3DivStyle: React.CSSProperties ={
    position: "absolute",
    left:500,
    top:380,
    // -----------------
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '500px',
    height: '100vh',
    maxHeight: '710px',
    marginTop: '-380px',
    marginLeft: '470px',
    opacity: '0.9', // Opacitate crescută
    backgroundColor: 'dimgray', // Culoare albă
    borderColor: 'black',
    padding: '0px',
    borderRadius: '0px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Umbra sub container
    transition: 'opacity 0.3s ease-in-out', // Efect de tranziție pentru opacitate
}
export const parent4DivStyle: React.CSSProperties ={
    position: "absolute",
    left:675,
    top:90,
    // -----------------
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '300px',
    height: '100vh',
    maxHeight: '300px',
    marginTop: '-80px',
    marginLeft: '-30px',
    opacity: '0.9', // Opacitate crescută
    backgroundColor: 'silver', // Culoare albă
    borderColor: 'dimgray',
    padding: '0px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Umbra sub container
    transition: 'opacity 0.3s ease-in-out', // Efect de tranziție pentru opacitate

}
export const selectButtonStyle: React.CSSProperties ={
    position: "absolute",
    marginLeft:560,
    marginTop:550,
    fontSize:20,
    color:"black",
    backgroundColor: 'beige'
}
export const openButtonStyle: React.CSSProperties ={
    position: "absolute",
    marginLeft:560,
    marginTop:615,
    fontSize:20,
    color:"black",
    backgroundColor: 'beige'
}
export const ButtonStyle: React.CSSProperties ={
    position: "absolute",
    marginLeft:560,
    marginTop:615,
    fontSize:20,
    color:"black",
    backgroundColor: 'gainsboro'
}
export const nameSearchLabel:React.CSSProperties ={
    position: "absolute",
    left:450,
    fontSize:20,
    top: 520
    //fontFamily:"Times New Roman"
}
export const searchTFieldstyle:React.CSSProperties ={
    position: "absolute",
    fontSize:20,
    left:-450,
    top: 550
    //fontFamily:"Times New Roman"
}
export const search2TFieldstyle:React.CSSProperties ={
    position: "absolute",
    fontSize:20,
    left:-450,
    top: 610
    //fontFamily:"Times New Roman"
}
export const updateButtonStyle: React.CSSProperties ={
    position: "absolute",
    marginLeft:10,
    marginTop:20,
    fontSize:20,
    color:"black",
    fontFamily:"TimesNewRoman",
    backgroundColor: 'whitesmoke'
}
export const MainStyle: React.CSSProperties ={
    backgroundImage: `url(${imagB})`,
    backgroundSize: 'cover',
    height: '99vh',
    width:'99%',
    padding:'5px'
}
export const StackStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',  // Așezați la stânga
    justifyContent: 'flex-start',  // Așezați la început
    backgroundColor: "rgba(255, 228, 181, 0.9)",
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.9)',
    margin: '20px',  // Spațiu între lista și restul conținutului
    maxWidth: '400px',
    marginLeft: '20px',  // Spațiu între container și marginea stângă a paginii
    marginRight: 'auto',  // Poziționați la stânga și lăsați spațiu la dreapta
};
//-----------------------------------------------------------------------------
export const ContainerAnimalProfil: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '230px',
    height: '100vh',
    maxHeight: '650px',
    marginTop: '5px',
    marginLeft: '20px',
    opacity: '0.9', // Opacitate crescută
    backgroundColor: 'silver', // Culoare albă
    borderColor: 'dimgray',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Umbra sub container
    transition: 'opacity 0.3s ease-in-out', // Efect de tranziție pentru opacitate
};
export const ContainerMyDoctorProfil: React.CSSProperties = {
    top:300,
    left:300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '235px',
    height: 200,
    maxHeight: '700px',
    marginTop: '90px',
    marginLeft: '6px',
    opacity: '0.9', // Opacitate crescută
    backgroundColor: 'silver', // Culoare albă
    borderColor: 'dimgray',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Umbra sub container
    transition: 'opacity 0.3s ease-in-out', // Efect de tranziție pentru opacitate
};
export interface voucherInterface{
    idVoucher:number,
    numeBeneficiar:string,
    numeVoucher:string,
    valoare:number
}
export interface infoStareInterface{
    idInfo:number,
    stare:string,
    detalii:string
}
export interface animalInterface {
    idAnimal : number,
    nume : string,
    rasa : string,
    varsta : number,
    sex : string,
    steril : string,
    nrCip : string,
    tipAnimal: string,
    idPacient: number,
    idDoctor: number,
    feedbacks: string[],
    d2a:d2aInterface[],
    istoric:infoStareInterface[],
    vouchers:voucherInterface[]

}
export interface utilizatorInterface {
    utilizatorId : number,
    nume : string,
    prenume : string,
    adresa : string,
    email : string,
    nrTel : string,
    parola : string

}
export interface d2aInterface {
    idDoc2Animal: number,
    idDoctor: number,
    idAnimal:number,
    mesaje:string[]
}
export interface doctorInterface {
    idDoctor : number,
    specializare: string,
    feedback : string[],
    utilizator : utilizatorInterface,
    d2a : d2aInterface[],
    animale:animalInterface[]
}
