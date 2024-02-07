import { Box, Button, Container, Typography, styled } from '@mui/material'
import React from 'react'
import colors from '../../vars'
import getImageUrl from '../../utils'

const PrimBtn = styled(Button)({
    background: colors.primaryPurple,
    boxShadow: '0px 3px 6px rgba(145, 38, 250, 0.6)',
    borderRadius: '7px',
    fontSize: '11px',   
    textTransform: 'capitalize', 
    padding: '10px 30px',
    '&:hover': {
        background: 'rgba(145, 38, 250, 0.2)',  
        border: `1px solid ${colors.primaryPurple}`,  
        color: colors.primaryPurple,     
      },
})

const PrimBtnOutline = styled(Button)({
    color: colors.primaryPurple,
    border: `1px solid ${colors.primaryPurple}`,
    borderRadius: '7px',
    fontSize: '11px',   
    textTransform: 'capitalize', 
    padding: '10px 30px',
    '&:hover': {
        background: 'rgba(145, 38, 250, 0.2)',  
        border: `1px solid ${colors.primaryPurple}`,              
      },
})

const Home = () => {
  return (
    <Box sx={{
        pt:'80px',
        background: `linear-gradient(to right, ${colors.shade}, ${colors.white})`
    }}>

        <Container
        sx={{
            display:'flex',
            direction:'row',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
            <Box flex={1}>
                <Box mb={'15px'}>
                    <Typography variant='h2' fontWeight={600} color={colors.lightGray}>
                        Captivate Your Audience With Exceptional Voiceovers 
                    </Typography>
                </Box>
                <Box mb={'15px'}>
                    <Typography variant='body1'  sx={{color:colors.lightGray}}>
                        We Are An Online Service Provider That Provides To <b>Voiceovers 
                        To Many Different Companies</b>.  We Specialize In On Hold Music And 
                        Voicemails And Greeting. 
                    </Typography>
                </Box>
                <Box
                sx={{
                    display:'flex',
                    justifyContent: 'flex-start',
                    gap:'20px'
                }}
                >
                    <PrimBtn variant="contained">Get Started Now </PrimBtn>
                    <PrimBtnOutline variant="outlined">Explore Demo</PrimBtnOutline>
                </Box>
            </Box>
            <Box flex={1} textAlign={'center'}>
                <img src={getImageUrl('hero/hero.png')} alt="hero" width={'80%'}/>
            </Box>
        </Container>
    </Box>
  )
}

export default Home