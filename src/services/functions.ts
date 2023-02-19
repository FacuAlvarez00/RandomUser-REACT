import axios from 'axios'


let datos: any[] = [];

let num_results: number


async function allPeople() {
  try {
    let num_results = (Math.random() * 100)
    const apiKey =  `https://randomuser.me/api/?page=${num_results}&results=24&seed=abc`;
    const response = await axios.get(apiKey);
    datos = []
    datos.push(...response.data.results)
    console.log("array datos", datos)
    return datos;
  } catch (error) {
    console.error(error);
  }
} 



const onePerson = (id: any) => {
  return new Promise((resolve, reject) => {
    console.log(datos)
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
    console.log(datos)
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
  getGender,

}