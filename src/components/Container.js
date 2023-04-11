import React from 'react'
import {List, ListItem, Typography} from '@mui/material';
import Ccard from './Ccard';
import '../App.css';
import '../scrollbar.css';

export default function Container(props) {
    
    let t;
    switch(props.type) {
          case "movie":
            t="Movies"
            break;
          case "show":
            t="Shows"
            break;
          case "song":
            t="LISTEN - songs"
            break;
          default:
        } 

    if (props.data.length>=1)
    return (
        <div className='card-list'>
            <div className='list-title'>
              <Typography className='titl' style={{margin:'auto'}} variant='h5' >{t}</Typography>
            </div>
            <div className='card-container'>
              <List style={{ display: 'flex'}}>
                {props.data.map((req)=>
                  <ListItem>
                    <Ccard contentType={props.type} key={req.id}{...req}/>
                  </ListItem>
                )}
              </List>
            </div>
        </div>
      )
    else {
        <> </>
    }
      

    
}
