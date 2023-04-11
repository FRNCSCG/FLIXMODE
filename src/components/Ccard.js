import React from 'react'
import { Card, CardMedia, CardContent, Typography, Box, CardActionArea} from '@mui/material';
import movielogo from '../assets/-Pngtree-movie-poster.png'
import CModal from './CModal';
import StarRateIcon from '@mui/icons-material/StarRate';

export default function Ccard({title, release_date, poster_path, backdrop_path, name, first_air_date, overview, id, contentType, artist, album, vote_average}) {
  
  let tit;
  let date;
  let i;
  let providerpath;
  
  switch(contentType) {
    case "movie":
      tit= title
      date=release_date ? release_date.slice(0, 4) : "no date";
      providerpath=`https://www.themoviedb.org/movie/${id}/watch`
      break;
    case "show":
      tit= name 
      date=first_air_date ? first_air_date.slice(0, 4) : "no date";
      providerpath=`https://www.themoviedb.org/tv/${id}/watch`
      break;
    case "song":
      tit= title
      date=artist.name
      providerpath=`https://www.deezer.com/track/${id}`
      break;
    default:
  }
 
  switch(poster_path || album || movielogo) {
    case poster_path:
      i= "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/" + poster_path
      break;
      case album:
      i= album.cover_medium
      break;
    default:
      i= movielogo
  } 

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  
  return (
    <div >
    
    <CardActionArea onClick={handleModalOpen}>
    <Card  className="card"  >
    

      <CardMedia 
      className='card-img' 
        component="img"
        sx={{ width: "50%", float:'left'}}
        image={i}
        alt="imagen"
      />
      <Box className='card-title' sx={{ maxWidth: "50%",  float:'right' }}>
        <CardContent>
          <Typography title={tit} className='text-ellipsis' sx={{fontSize:14}}>
            {tit}
          </Typography>
          <Typography sx={{fontSize:14, textOverflow:'ellipsis' }}>
            {date}
          </Typography>
          <div className='card-desc'>
            <StarRateIcon sx={{width:'18px', margin:'8px 0px auto 0px', color:'yellow', }}/>
            <p style={{marginLeft:'3px'}}>
              {vote_average.toFixed(1)}
            </p>
          </div>
        </CardContent>
    </Box>
    </Card>
    </CardActionArea>
      
    {modalOpen ? <CModal open={modalOpen} close={handleModalClose} title={tit} image={backdrop_path} description={overview} provider={providerpath}/> : <> </> }
    

    </div>
  )
}
