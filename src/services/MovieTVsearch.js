import axios from "axios"
const API_KEY= "ca5a09abc57fc32fe2abcfe82c33fde8"


export async function fetchMoviestv(path) {
  try{
    const response = await axios.get(`https://api.themoviedb.org/3/search/${path}&api_key=${API_KEY}`).then(response => response.data)
    return (response);
  }catch(e){
    console.log(e)
  }
}

export function fetchProviders(id) {
  try{
    const response = axios.get(` https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}`).then(response => response.data)
    return (response);
  }catch(e){
    console.log(e)
  }
}




