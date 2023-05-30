import React, { useState, useEffect, useContext } from 'react'
import { allPeople, getGender, generateRandomLetter } from '../../services/functions'
import PersonDetail from './Person'
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

    const {setPersons, persons, setDataLoaded, dataLoaded } = useContext(personContext) 
    const [searchTerm, setSearchTerm] = useState('');
    const [mobile, setMobile] = useState<boolean>(false);
    const [refresh, setRefresh] = useState<boolean>(false);

    let { gendertype } = useParams();

    function handleRefresh() {
       allPeople(true)
       setRefresh(!refresh)
    }

    function handleMobile() {
        if (window.innerWidth < 400) {
            setMobile(true)
        } else {
            setMobile(false)
        }
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


    console.log(mobile)

    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const filteredPersons = persons.filter((person: any) => person.name.first.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <div className="mb-5">
                <input
                    type="text"
                    placeholder="Search by first name"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>

           <button onClick={handleRefresh}>REFRESH</button> 

            <div className={mobile? "grid grid-rows-1 grid-cols-1 gap-4" : "grid grid-rows-1 grid-flow-col gap-4"}>
                {filteredPersons.map((person: any) => (
                    <Link to={`/person/${person.name.first}`}>
                        <>
                            <div className="style rounded-xl">
                                <PersonDetail
                                    firstName={person.name.first}
                                    lastName={person.name.last}
                                    smallImage={person.picture.large}
                                    city={person.location.city}
                                    country={person.location.country}
                                />
                                {/* <button className="bg-red-400 px-5 text-white font-bold mt-2">MORE INFO</button> */}

                            </div>
                        </>
                    </Link>
                ))}
            </div>
        </>
    );
}
export default PersonsListContainer