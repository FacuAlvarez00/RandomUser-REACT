import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div  className='flex justify-between items-center h-24 bg-red-50'>
        <ul className='flex justify-center text-4xl text-black italic w-full'>
            <Link to={"/"}>
                <li className='p-10 hover:text-white transition ease-in-out delay-50'>Home</li>
            </Link>
            <Link to={"/gender/male"}>
                <li className='p-10 hover:text-white transition ease-in-out delay-50'>Men</li>
            </Link>
            <Link to={"/gender/female"}>
                <li className='p-10 hover:text-white transition ease-in-out delay-50'>Women</li>
            </Link>

            <Link to={"/FAQ"}>
                <li className='p-10 hover:text-white transition ease-in-out delay-50'>FAQ</li>
            </Link>
            
          
        </ul>
        
      
    </div>
  )
}

export default NavBar
