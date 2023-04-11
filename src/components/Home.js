import React, {useEffect, useState} from 'react'
import {Radio, RadioGroup, FormLabel, FormControlLabel, Grid} from '@mui/material';
import '../App.css';
import Container from './Container';
import {fetchMoviestv} from '../services/MovieTVsearch'
// import {fetchMusic} from '../services/MusicSearch'
//import {fetchGames} from '../services/Gamesearch'
import '../scrollbar.css';
import TextBox from './TextBox';
import background from '../assets/moviebackground.jpg'
import popcorn from '../assets/palomitas.png'
export default function Home() {
    const [query, setQuery] = useState ("")
    const [movies, setMovies] = useState ([])
    const [shows, setShows] = useState ([])
    // const [songs, setSongs] = useState ([])
    //const [games, setGames] = useState ([])

    const [category, setCategory] = useState ("all")


    const fetchData = async (type, path) => {

        if (type==="movie" || type==="tv")
        {
            await fetchMoviestv(path).then(data => {
                if (type==="movie")
                {
                    setMovies(data.results)
                }
                if (type==="tv")
                {
                    setShows(data.results)
                }
                
            });   
        }
        if (type==="game")
        {
            // await fetchGames(path).then(data => {
            // setGames(data.results)
            // });   
        }
        if (type==="song")
        {
            // await fetchMusic(path).then(data => {
            // setSongs(data.data)
            // console.log(songs)
            // });   
        }
        
    }

    useEffect(() => {
        
        const timer = setTimeout(() => {
            if (query)
            {
                switch(category) {
                    case "all":
                        fetchData("movie", `movie?query=${query}`)
                        fetchData("tv", `tv?query=${query}`)
                        fetchData("song", `track:"${query}"`)
                        // fetchData("game",query)
                    break;
                    case "movies":
                        fetchData("movie", `movie?query=${query}`)
                        setShows([]);
                    break;
                    case "tv":
                        fetchData("tv", `tv?query=${query}`)
                        setMovies([]);
                    break;
                    // case "songs":
                    //     fetchMusic("song", `track:${query}`)
                    //     setShows([]);
                    //     setMovies([]);
                    // break;
                    default:
                } 
            }
            else{
                setMovies([]);
                setShows([]);
            }

        }, 300)
        
        return () => clearTimeout(timer)
    }, [query, category])

      

    return (
    <div className='home'>
        <div className='top-bg'>
        </div>
            {/* <img className='background' 
            src="https://culturalhater.com/wp-content/uploads/2019/01/f5ccd6ff8fa4d948d77a7da436e3711d-1920x768.png" alt=''/> */}
            
            <div className='logo'>
                <img className='jello-vertical' src={popcorn} alt=''/>
                <h1 className='logo-title text-flicker-in-glow'> Flixmode </h1>
            </div>
            
            <TextBox search={query} setSearch={setQuery}/>

            <div className='categories'>
                <Grid container spacing={3}>
                    <Grid item>
                            <FormLabel style={{textAlign: 'left', color: "white"}}  id="demo-row-radio-buttons-group-label">WATCH</FormLabel>
                            <RadioGroup value={category}
                            onChange={(e) => setCategory(e.target.value)} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                <FormControlLabel value="all"   control={<Radio className='radio'/>} label="All" />
                                <FormControlLabel value="movies" control={<Radio className='radio'/>} label="Movies" />
                                <FormControlLabel value="tv" control={<Radio className='radio'/>} label="TV" />
                            </RadioGroup>
                    </Grid>
                    {/* <Grid item>
                            <FormLabel style={{textAlign: 'left'}}  id="demo-row-radio-buttons-group-label">LISTEN</FormLabel>
                            <RadioGroup value={category}
                            onChange={(e) => setCategory(e.target.value)} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                <FormControlLabel value="all-songs" control={<Radio />} label="All" />
                                <FormControlLabel value="songs" control={<Radio />} label="Songs" />
                                <FormControlLabel value="albums" control={<Radio />} label="Albums" />
                                <FormControlLabel value="artists" control={<Radio />} label="Artists" />
                            </RadioGroup>
                    </Grid> */}
                </Grid>   
            </div>         



        {/* <div className="results" style={{visibility: query ? "visible" : "hidden"}} > */}
        <div className="results" >
            <div className="show">
                <Container type="movie" data={movies}  />
            </div>
            <Container type="show" data={shows} style={{visibility: shows ? "visible" : "hidden" }}/>
            
        </div>

    </div>    
  
  )
}



