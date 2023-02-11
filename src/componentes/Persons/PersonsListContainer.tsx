
import React, {useState, useEffect} from 'react'
import { allPeople } from '../../services/functions'
import HomePage from '../HomePage'
import PersonDetail from './PersonDetail'
import { Link } from "react-router-dom";


type props = {
    firstName: string
    lastName: string
    smallImage: any
    country: string
    city: string
  }
  
const PersonsListContainer: React.FC <props> = () => {
    const [persons, setPersons] = useState<any[]>([]);

    useEffect(() =>{
        allPeople(setPersons)
    }, [])



    return (
        
     <div className='grid grid-cols-6 gap-9'>
        {persons && persons.map((person) => (
            <>
            <div className=''>
            <PersonDetail   
            firstName={person.name.first} 
            lastName={person.name.last}
            smallImage={person.picture.large}
            city={person.location.city} 
            country={person.location.country}
            />
            <Link to={`/person/${person.name.first}`}>
                <button className=' bg-red-400 px-5 text-white font-bold mt-2'>MORE INFO</button>
            </Link>

            </div>
            </>
        ))
        }
    </div>
    )
}

export default PersonsListContainer