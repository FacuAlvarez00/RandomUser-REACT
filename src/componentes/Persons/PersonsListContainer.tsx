import React, { useState, useEffect, useContext } from 'react'
import { allPeople, getGender } from '../../services/functions'
import PersonDetail from './Person'
import { Link, useParams } from "react-router-dom";
import { personContext } from '../../context/personContext'
import "./persondetail.css"





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
    

    let { gendertype } = useParams();

    function handleRefresh() {
        setDataLoaded(true)
    }


    useEffect(() => {
        if (dataLoaded) {
            allPeople()
                .then((res) => {
                    setPersons(res as any[]);
                    setDataLoaded(false)
                })
                .catch((error) => alert(error));
        }
    }, [dataLoaded]);



    useEffect(() => {
        if (gendertype) {
            getGender(gendertype).then((res) => {
                setPersons(res as any[]);
               
            });
        }
    }, [gendertype]);


    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const filteredPersons = persons.filter((person: any) => person.name.first.toLowerCase().includes(searchTerm.toLowerCase()));

    console.log("array personas", persons)
    console.log(dataLoaded)
    console.log("params", gendertype)

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

            <div className="grid grid-cols-4 justify-items-center gap-4 mb-8" >
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