import axios from "axios"


// export async function fetchMusic(path) {
//   try{
//     const response = await axios.get(`https://api.deezer.com/search?q=${path}`).then(response => response.data)
//     console.log(response)
//     return (response);
//   }catch(e){
//     console.log(e)
//   }
// }



// const options = {
//   method: 'GET',
//   url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
//   params: {q: 'eminem'},
//   headers: {
//     'X-RapidAPI-Key': 'ffffb3f88bmsh75c9eed5204e9e7p14eedbjsnae9c1b054f79',
//     'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


export async function fetchMusic(path) {
  
  let options = {
    params: {q: path},
    headers: {
      'X-RapidAPI-Key': 'ffffb3f88bmsh75c9eed5204e9e7p14eedbjsnae9c1b054f79',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  try{
    const response = await axios.get('https://deezerdevs-deezer.p.rapidapi.com/search', options ).then(response => response.data)
    return (response);
  }catch(e){
    console.log(e)
  }
}
