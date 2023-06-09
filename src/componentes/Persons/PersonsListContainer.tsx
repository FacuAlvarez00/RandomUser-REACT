import React, { useState, useEffect, useContext } from 'react'
import { allPeople, getGender, generateRandomLetter } from '../../services/functions'
import PersonDetail from './PersonDetail'
import { Link, useParams } from "react-router-dom";
import { personContext } from '../../context/personContext'

import "./personslistcontainer.css"





type props = {
    firstName: string
    lastName: string
    smallImage: any
    country: string
    city: string
}

const PersonsListContainer: React.FC<props> = () => {

    const { setPersons, persons, setDataLoaded, dataLoaded, isLargeScreen } = useContext(personContext)
    const [searchTerm, setSearchTerm] = useState('');
    const [refresh, setRefresh] = useState<any>();

 
    let { gendertype } = useParams();

    function handleRefresh() {
        allPeople(true)
        setRefresh(!refresh)
    }

  

    useEffect(() => {
        if (!gendertype) {
            allPeople(false)
                .then((res) => {
                    setPersons(res as any[]);
                })
                .catch((error) => alert(error));
        } else {
            getGender(gendertype).then((res) => {
                setPersons(res as any[]);
            });
        }

    }, [gendertype, refresh]);



    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const filteredPersons = persons.filter((person: any) => person.name.first.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <div className={isLargeScreen? "flex gap-x-12 items-center px-32 my-3" : "flex gap-x-4 items-center px-7 my-3" }>
                <input style={isLargeScreen? {height: "40px", width: "300px"} : {height: "30px", width: "150px"}} className='border-2 border-neutral-200 rounded-lg'
                    type="text"
                    placeholder="Search by first name"
                    value={searchTerm}
                    onChange={handleChange}
                />

                            
                <button style={{backgroundColor: "#73BBC9", border: "none"}} className={isLargeScreen? 'border-2 my-6 rounded-full text-white px-4 py-2 ': 'border-2 rounded-full  text-white px-1 py-1 btn_detail text-sm my-2'} onClick={handleRefresh}>REFRESH</button>


            </div>

         
           
            
            <div className={isLargeScreen ? "grid grid-cols-4 justify-items-center gap-4 mb-8 px-24" : "grid grid-rows-1 grid-cols-1 gap-4"}>
                {filteredPersons.map((person: any) => (
                    <Link to={`/person/${person.name.first}`}>
                        <div className='style'>
                            <div className={isLargeScreen? "card rounded-xl px-7 style" : "card rounded-xl px-7 mb-3"}>
                                <PersonDetail
                                    firstName={person.name.first}
                                    lastName={person.name.last}
                                    smallImage={person.picture.large}
                                    city={person.location.city}
                                    country={person.location.country}
                                />  

                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
export default PersonsListContainer