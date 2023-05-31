import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { onePerson } from '../../services/functions'
import "./persondetail.css"





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

  console.log("params", params)
  console.log("detailedPerson", detailedPerson)


  return (
    <>
      {detailedPerson ? (
        <>
          <div className='flex justify-center card_holder rounded-lg'>

            <div className='flex items-start bg-red-100 card_detail p-9 gap-8 text-2xl font-semibold text-center'>

              <div className='flex justify-center img_detailed mt-5'>
                <img className='round' src={detailedPerson.picture.large} />
              </div>

              <div className='flex flex-col justify-center h-full'>
                <h1 className='my-1'>
                  Name: {detailedPerson.name.title + " " + detailedPerson.name.first
                    + " " + detailedPerson.name.last}
                </h1>
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



          <div>
            <Link to={"/"}>
              <button className=' border-2 my-10'>Return to index</button>
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


