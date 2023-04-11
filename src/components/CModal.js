import React from 'react'
import { Modal, Box, Typography, Divider, CardActionArea, IconButton } from '@mui/material'
import tmdb from '../assets/tmdb.png'
import CloseIcon from '@mui/icons-material/Close';

export default function CModal({open, close, title, image, description, provider}) {
  

  const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 300,
      maxHeight: "85vh",
      bgcolor: '#131625',
      border: '2px solid #000',
      boxShadow: 24,
      overflow: "auto",
      borderRadius: "15px",
      p: 4,
      color:"white",
    };

  return (
    <Modal 
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ margin: '-20px -20px 5px auto'}} >
            <IconButton onClick={close} style={{float:'right', color:'white'}}>
              <CloseIcon></CloseIcon>
            </IconButton>
          </div>
          <Box
          component="img"
          sx={{
            width: "100%",
            display:'flex',
            marginLeft:'auto',
            marginRight:'auto',
            borderRadius:'10px',
          }}
          alt="Image"
          src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${image}`}
          />
          <Typography id="modal-modal-title" variant="h6" sx={{margin: "15px 0px"}} component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <Divider/>
          <div style={{margin:'10px', display:'inline'}}> 
            <Typography id="modal-modal-title" variant="h6" component="h2">
              More Info and Stream Providers:
            </Typography>
            <CardActionArea href={provider} target="_blank" sx={{
                height: '102px',
                width: '259px',
                margin: 'auto',
                marginTop: '10px',
                borderRadius:'20px'
              }}> 
              <Box component="img" sx={{height: '102px', width: '259px', borderRadius:'20px'}} alt="Image" src={tmdb}/>
            </CardActionArea>
          </div>

        </Box>
      </Modal>
  )
}
