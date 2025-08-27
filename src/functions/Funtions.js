import axios from 'axios'

const allPersonajes = async(estado)=>{
  const peticion = await axios.get(`https://rickandmortyapi.com/api/character`);
  estado(peticion.data.results)
}
const next = async(setPersonajes, nextPage) =>{
  const peticion = await axios.get(`https://rickandmortyapi.com/api/character/?page=${nextPage}`);
  setPersonajes((prev) => [...prev, ...peticion.data.results]);
}
const onePersonaje = async (id,estado)=>{
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    estado(peticion.data)
}
export {
    allPersonajes,
    next,
    onePersonaje,
}
