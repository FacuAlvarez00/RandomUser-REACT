import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { onePerson } from '../../services/functions'





const PersonDetailed = () => {
  const [detailedPerson, setDetailedPerson] = useState<any>();

  let params: any = useParams()


  
  

useEffect(() => {
  const localData = localStorage.getItem(params.id);
  if (localData) {
    setDetailedPerson(JSON.parse(localData));
    return;
  }


  onePerson(params.id)
  .then((respuesta) => {
    localStorage.setItem(params.id, JSON.stringify(respuesta));
    setDetailedPerson(respuesta);
  })  
  .catch((error) => (error));
}, [params.id]);

console.log(params)
console.log(detailedPerson)
  

  return (
    <>
      {detailedPerson ? (
        <>
          <div className=''>
            <img src={detailedPerson.picture.large}/>
            <p>
              Name: {detailedPerson.name.title + " " + detailedPerson.name.first + " " + detailedPerson.name.last}
            </p>
            <p>Current age: {detailedPerson.dob.age}</p>
            <p>
              Username: {detailedPerson.login.username}
            </p>
            <p>
              EMAIL: {detailedPerson.email}
            </p>
    
            <p>Country: {detailedPerson.location.country}</p>
            <p>City: {detailedPerson.location.city}</p>
          </div>


          <div>
          <Link to={"/"}>
              <button>Return to index</button>
            </Link>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );

}
export default PersonDetailed


