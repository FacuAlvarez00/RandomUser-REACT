import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { personContext } from '../../context/personContext'


const NavBar = () => {

    const { isLargeScreen } = useContext(personContext)



    return (
        <div style={{backgroundColor: "#FCE9F1"}} className={isLargeScreen? 'flex items-center h-24 px-24' :
        'flex items-center h-16 bg-red-50'}>
            <ul className={isLargeScreen? 'flex gap-x-8 text-4xl text-black italic w-full' : 
                        'flex justify-between text-4xl text-black italic w-full px-7' }>
                <Link to={"/"}>
                    <li className={isLargeScreen? 'p-10 hover:text-white transition ease-in-out delay-50' :
                        "p-1 transition ease-in-out delay-50 text-3xl"}>Home</li>
                </Link>
                <Link to={"/gender/male"}>
                    <li className={isLargeScreen? 'p-10 hover:text-white transition ease-in-out delay-50' :
                        "p-1 transition ease-in-out delay-50 text-3xl"}>Women</li>
                </Link>
                <Link to={"/gender/female"}>
                    <li className={isLargeScreen? 'p-10 hover:text-white transition ease-in-out delay-50' :
                        "p-1 transition ease-in-out delay-50 text-3xl"}>Men</li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar
