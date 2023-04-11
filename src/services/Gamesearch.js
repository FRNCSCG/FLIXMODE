import axios from "axios"
const API_KEY= "ffdde065b5dd5ae2126e0276a79ea8137f70336d8848c3c534f2a59152c63947"
const API_KEY_PRIVATE= "7c59a4ecc1bf380caacb6b584d18562b364a7abf68d1d2ba2137bbf894d494be"

export async function fetchGames(path) {

  var data = []
  try{
    // const response = await axios.get(`https://api.thegamesdb.net/v1/Games/ByGameName?apikey=${API_KEY}&name=${path}`).then(response => response.data)
    const response = await axios.get(`https://api.thegamesdb.net/v1/Games/ByGameName?apikey=ffdde065b5dd5ae2126e0276a79ea8137f70336d8848c3c534f2a59152c63947&name=${path}`).then(response => response.data)
    console.log(response)
    data = response
    return (data);
  }catch(e){
    console.log(e)
  }
   
}