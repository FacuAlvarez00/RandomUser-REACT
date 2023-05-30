import axios from 'axios'


let datos: any[] = [];
let num_results: number
let randomLetter = ""
let randomLetterTwo = ""

function generateRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
  randomLetterTwo = alphabet[Math.floor(Math.random() * alphabet.length)]
}


async function allPeople(boolean: boolean) {
  try {
    if (boolean === true) {
      generateRandomLetter()
    }
    let num_results = (Math.random() * 100)
    /* const apiKey =  `https://randomuser.me/api/?page=${num_results}&results=24&seed=abc`; */
    const apiKey = `https://randomuser.me/api/?page=3&results=24&seed=a${randomLetter}${randomLetterTwo}`
    const response = await axios.get(apiKey);
    datos = []
    datos.push(...response.data.results)
  
    return datos;
  } catch (error) {
    console.error(error);
  }
} 


async function allPeopleRefresh() {
  try {
  /*   generateRandomLetter() */
    let num_results = (Math.random() * 100)
    /* const apiKey =  `https://randomuser.me/api/?page=${num_results}&results=24&seed=abc`; */
    const apiKey = `https://randomuser.me/api/?page=3&results=24&seed=a${randomLetter}`
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
  allPeopleRefresh,
  onePerson,
  datos,
  getGender,
  generateRandomLetter,

}