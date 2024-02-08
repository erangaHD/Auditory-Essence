import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import colors from '../../vars'
import ServiceCard from './ServiceCard'
import service from '../../data/service.json'
import voice from '../../data/voice.json'
import VoiceCard from './VoiceCard'

const Services = () => {
  return (
    <Container sx={{mt:'50px', mb: '50px'}}>
        <Box sx={{mb:'150px'}}>
            <Box>
                <Typography variant='h4' sx={{fontWeight:600}}>
                    Our Voiceover Services
                </Typography>
                <Typography color={colors.midGray} mb={'50px'}>
                    Versatile and High-Quality
                </Typography>

                <Grid container spacing={{xs:5, sxm:4, md:3}} mb={'50px'} justifyContent={'center'}>
                    {
                        service.map((item, id) => {
                            return <ServiceCard key={id} topic={item.service} image={item.image} description={item.description} />
                        })
                    }
                    
                    
                </Grid>
            </Box>
            <Box></Box>
        </Box>
        
        <Box>
            <Box>
                <Box sx={{
                    display:'flex', 
                    alignItems:'center',
                    justifyContent: 'space-between'
                    }}>
                        <Typography variant='h4' sx={{fontWeight:600}}>
                            Voiceover Samples
                        </Typography>
                        <Typography color={colors.midGray} sx={{cursor:'pointer', display:{xs:'none', sm:'flex'}}}>
                            Show more
                        </Typography>
                </Box>
                <Typography color={colors.midGray} mb={'50px'}>
                    Hear Our Artists in Action
                </Typography>

                <Grid container spacing={{xs:5, sxm:4, md:3}} mb={'50px'} justifyContent={'center'}>
                    {
                        voice.map((item, id) => {
                            return <VoiceCard key={id} topic={item.name} audio={item.audio}/>
                        })
                    }                    
                    
                </Grid>
                <Typography align='right' color={colors.midGray} sx={{cursor:'pointer', display:{xs:'block', sm:'none'}}}>
                    Show more
                </Typography>
            </Box>
            
        </Box>

    </Container>
  )
}

export default Services