import React from 'react'
import "./persondetail.css"


type props = {  
  firstName: string
  lastName: string
  smallImage: any
  country: string
  city: string
}


const PersonsDetail: React.FC <props> = ({firstName, lastName, smallImage, country, city}) => {
  return (
    <div className='border-2 border-red-50'>

        <div className='flex justify-center '>
          <img src={smallImage} alt=""/>
        </div>

        <div>
          <p>{firstName + " " + lastName}</p>
        </div>

        <div>
          <p>City: {city}</p> 
          <p>Country: {country}</p>
        </div>
    </div>
  )
}

export default PersonsDetail
