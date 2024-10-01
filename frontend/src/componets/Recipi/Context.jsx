import { createContext, useState } from "react";


export const GlobalContext = createContext(null);

export default function GlobalState({children}){

    const [search,setsearch] = useState('');
    const [data,setdata] = useState([]);
    const [favourite,setfavourites] = useState([]);

    return <GlobalContext.Provider value={{search,setsearch,data,setdata,favourite,setfavourites}}>{children}</GlobalContext.Provider>
}