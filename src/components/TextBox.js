import React from 'react'
import { TextField, IconButton} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';


export default function TextBox({search, setSearch}) {

    const handleClearClick = () => {
        setSearch("");
    }

    return (
    <div className='txt'>
        <TextField className='tbox'
        id="outlined-basic" label="Search for movies and shows..." size='medium' fullWidth
        InputProps={{
            className:'tbox-input',
            endAdornment:(<IconButton onClick={handleClearClick} sx={{visibility: search ? "visible" : "hidden", color:'#4255be' }}><ClearIcon/></IconButton>)
        }}
        InputLabelProps={{
            className:'tbox-label',
        }}
        value={search}
        onChange={event => setSearch(event.target.value)}
        />
    </div> 
  )
}


