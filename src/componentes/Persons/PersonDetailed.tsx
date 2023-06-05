import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { onePerson } from '../../services/functions'
import "./persondetail.css"
import { personContext } from '../../context/personContext'
import { useContext } from 'react'





const PersonDetailed = () => {
  const [detailedPerson, setDetailedPerson] = useState<any>();
  const { isLargeScreen } = useContext(personContext)

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

  console.log("params", params)
  console.log("detailedPerson", detailedPerson)


  return (
    <div className='centered_container'>
      {detailedPerson ? (
        <>
          <div className={isLargeScreen? 'card_holder' : ' mt-8 px-2' }>

            <div className={isLargeScreen? 'flex items-start bg-red-100 card_detail p-9 gap-8 font-semibold text-center w-full' : 'flex items-start bg-red-100 card_detail p-4 gap-8 font-semibold w-full'}>

              <div className={isLargeScreen ? 'flex justify-center img_detailed mt-5' : 'flex justify-center img_detailed mt-5'}>
                <img className='' src={detailedPerson.picture.large} />
              </div>

              <div className='flex flex-col justify-center h-full'>
                <h2 className='my-1'>
                  Name: {detailedPerson.name.title + " " + detailedPerson.name.first
                    + " " + detailedPerson.name.last}
                </h2>
                <p className='my-1'>Current age: {detailedPerson.dob.age}</p>
                <p className='my-1'>Country: {detailedPerson.location.country}</p>
                <p className='my-1'>City: {detailedPerson.location.city}</p>
                <p className='my-1'>
                  Username: {detailedPerson.login.username}
                </p>
                <p className='my-1'>
                  Email: {detailedPerson.email}
                </p>
              </div>

            </div>

          </div>


          <div className='ml-2'>
            <Link to={"/"}>
              <button style={{backgroundColor: "#73BBC9", border: "none" }} className={isLargeScreen? 'border-2 my-10 rounded-full text-white px-2 py-1': 'border-2 my-10 rounded-full text-white px-2 py-1 btn_detail'}>Return to index</button>
            </Link>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

}
export default PersonDetailed


