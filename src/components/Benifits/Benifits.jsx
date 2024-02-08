import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import colors from '../../vars'
import BenifitCard from './BenifitCard'
import benifit from '../../data/benifits.json'



const ico = 'SmsRoundedIcon'

const Benifits = () => {
  return (
    <Container >
        <Box sx={{padding:'80px 20px 80px 20px'}}>
            <Typography align='center' variant='h4' sx={{fontWeight:500, mb:'40px'}}>
                ON HOLD <span style={{color:colors.primaryPurple}}>BENIFITS</span>
            </Typography>

            <Grid container justifyContent='center'spacing={6} >                               
                
                {
                    benifit.map((item, id) => {
                        return <BenifitCard name={item.name} description={item.description} key={id}/>
                    })
                }
                
                
            </Grid>
        </Box>
    </Container>
  )
}

export default Benifits