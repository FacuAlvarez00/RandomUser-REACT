import axios from 'axios'

const ApiResults = "https://randomuser.me/api/?results=24"

const datos: any[] = [];

const allPeople = async (state: any) => {
    const petition = await axios.get(ApiResults)
    datos.push(...petition.data.results)
    state(petition.data.results)
}


const onePerson = (id: any) => {
    return new Promise((resolve, reject) => {
      const prod = datos.find(el => el.name.first === (id))
      setTimeout(() => {
        if (prod){
          resolve(prod);
        }
        else{
          reject("ERROR (el producto que buscaste no existe)")
        }
      }, 500);
    });
  }
  
 


export{
    allPeople,
    onePerson
}