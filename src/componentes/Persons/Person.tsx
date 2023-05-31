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
    <>
    <div className='flex gap-x-16 border-2 border-pink-200 rounded-lg'>

        <div >
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
