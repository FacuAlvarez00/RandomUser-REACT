import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { personContext } from '../../context/personContext'


const NavBar = () => {

    const { isLargeScreen } = useContext(personContext)



    return (
        <div className={isLargeScreen? 'flex items-center h-24 bg-red-50' :
        'flex items-center h-16 bg-red-50'}>
            <ul className={isLargeScreen? 'flex justify-between text-4xl text-black italic w-full' : 
                        'flex justify-between text-4xl text-black italic w-full px-7' }>
                <Link to={"/"}>
                    <li className={isLargeScreen? 'p-10 hover:text-white transition ease-in-out delay-50' :
                        "p-1 hover:text-white transition ease-in-out delay-50 text-3xl"}>Home</li>
                </Link>
                <Link to={"/gender/male"}>
                    <li className={isLargeScreen? 'p-10 hover:text-white transition ease-in-out delay-50' :
                        "p-1 hover:text-white transition ease-in-out delay-50 text-3xl"}>Women</li>
                </Link>
                <Link to={"/gender/female"}>
                    <li className={isLargeScreen? 'p-10 hover:text-white transition ease-in-out delay-50' :
                        "p-1 hover:text-white transition ease-in-out delay-50 text-3xl"}>Men</li>
                </Link>

           {/*      <Link to={"/FAQ"}>
                    <li className={isLargeScreen? 'p-10 hover:text-white transition ease-in-out delay-50' :
                        "p-1 hover:text-white transition ease-in-out delay-50 text-3xl"}>Home</li>
                </Link>
 */}

            </ul>


        </div>
    )
}

export default NavBar
