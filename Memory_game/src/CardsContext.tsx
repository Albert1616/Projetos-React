import { Dispatch, SetStateAction, createContext } from "react";
interface CardsType{
    selected:number[],
    Setselected:Dispatch<SetStateAction<number[]>>,
    isTurned:boolean,
    SetisTurned:Dispatch<SetStateAction<boolean>>,
   /*  turn:boolean,
    Setturn:Dispatch<SetStateAction<boolean>> */
}

const CardsContext = createContext<CardsType>({
    selected:[],
    Setselected:() =>{},
    isTurned:false,
    SetisTurned:() =>{},
    /* turn:false,
    Setturn:() =>{} */
});

export default CardsContext;