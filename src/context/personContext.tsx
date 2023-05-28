 import { createContext, useEffect, useState, ReactNode } from "react"
import HomePage from "../componentes/HomePage"

interface IAuthContext {
    persons: any[];
    setPersons: any;
    dataLoaded: any;
    setDataLoaded: any;
}





export const personContext = createContext<any>(null)

interface IAuthContextProviderProps {
    children: ReactNode;
  }



function PersonProvider(props: React.PropsWithChildren<any>){

    const [persons, setPersons] = useState<any[]>([]);
    const [dataLoaded, setDataLoaded] = useState<boolean>(true);

  



    return (
        <personContext.Provider value={{persons, setPersons, dataLoaded, setDataLoaded}}>
            {props.children}
        </personContext.Provider>
    )
}

export {PersonProvider} 