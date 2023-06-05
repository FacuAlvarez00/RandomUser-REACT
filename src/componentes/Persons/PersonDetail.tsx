import React from 'react'
import "./persondetail.css"
import { useContext } from 'react'
import { personContext } from '../../context/personContext'


type props = {  
  firstName: string
  lastName: string
  smallImage: any
  country: string
  city: string
}


const PersonsDetail: React.FC <props> = ({firstName, lastName, smallImage, country, city}) => {

  const {isLargeScreen} = useContext(personContext)

  return (
    <>
    <div style={{borderRadius: "15px", borderColor: "#FCE9F1"}} className={isLargeScreen? 'flex gap-x-5 border-2 personCard' : 'flex gap-x-8 border-2 card_container'}>

        <div>
          <img className='rounded-xl img_properties'src={smallImage} alt=""/>
        </div>


      <div className='flex-col self-center text-lg italic'>
        <div>
          <p className=''>{firstName + " " + lastName}</p>
        </div>

        <div>
          <p className=''>Country: {country}</p>
          <p className=''>City: {city}</p> 
        </div>
      </div>

    </div>

    <div  className='hover_info'>
      <div className='bg-red'>
        <p className='underline'>See person detail</p>
      </div>
   </div>
   </>
  )
}

export default PersonsDetail
