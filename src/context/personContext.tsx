 import { createContext, useEffect, useState, ReactNode } from "react"
 import { useWindowSize } from '@react-hook/window-size';
import HomePage from "../componentes/HomePage"


interface IAuthContext {
    persons: any[];
    setPersons: any;
    dataLoaded: any;
    setDataLoaded: any;
    isLargeScreen: any;
    setIsLargeScreen: any;
}





export const personContext = createContext<any>(null)

interface IAuthContextProviderProps {
    children: ReactNode;
  }



function PersonProvider(props: React.PropsWithChildren<any>){

    const [persons, setPersons] = useState<any[]>([]);
    const [dataLoaded, setDataLoaded] = useState<boolean>(true);
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);

    const [windowWidth] = useWindowSize();



    useEffect(() => {
        if (windowWidth < 400) {
            setIsLargeScreen(false)
        } else {
            setIsLargeScreen(true)
        }
    }, [windowWidth])

    console.log(isLargeScreen)

  

    return (
        <personContext.Provider value={{persons, setPersons, dataLoaded, setDataLoaded, isLargeScreen, setIsLargeScreen}}>
            {props.children}
        </personContext.Provider>
    )
}

export {PersonProvider} 