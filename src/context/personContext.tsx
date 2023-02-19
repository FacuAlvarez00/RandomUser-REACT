 import { createContext, useEffect, useState } from "react"
import HomePage from "../componentes/HomePage"




export const personContext = createContext<any>(null)
const suma: number = 3+4




function PersonProvider(props: React.PropsWithChildren<any>){
    return (
        <personContext.Provider value={{suma}}>
            {props.children}
        </personContext.Provider>
    )
}

export {PersonProvider} 