import axios from 'axios'


let datos: any[] = [];

async function allPeople() {
  try {
    const apiKey = "https://randomuser.me/api/?page=1&results=24&seed=abc";
    const response = await axios.get(apiKey);
    datos = []
    datos.push(...response.data.results)
    return datos;
  } catch (error) {
    console.error(error);
  }
} 



const onePerson = (id: any) => {
    return new Promise((resolve, reject) => {
      const prod = datos.find((el: any) => el.name.first === (id))
      console.log("datos en onePerson", datos)
      setTimeout(() => {
        if (prod){
          resolve(prod);
        }
        else{
          reject("ERROR (el producto que buscaste no existe)")
        }
      }, );
    });
  }

 const getGender = (genderURL: any) => {
    return new Promise((resolve, reject) => {
      let reqGender = datos.filter((person: any) => person.gender === genderURL);
      console.log("datos en getGender", datos)
      setTimeout(() => {
        if (reqGender){
          resolve(reqGender);
        }
        else{
          reject("ERROR (This category doesn't exist!)")
        }
      },);
    });
  };
   



export{
    allPeople,
    onePerson,
    datos,
    getGender
}