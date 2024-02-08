import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import getImageUrl from '../../utils'

const VoiceCard = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4} justifyContent={'center'}>
        <Box>
            <Typography variant='body1' sx={{fontWeight:600, mb:'10px'}}>{props.topic}</Typography>
            <audio controls src={getImageUrl(`voice/${props.audio}`)} />                        
        </Box>
    </Grid>
  )
}

export default VoiceCard