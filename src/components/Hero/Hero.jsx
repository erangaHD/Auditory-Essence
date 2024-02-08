import React from 'react'
import { Box, Button, Container, Typography, styled } from '@mui/material'
import colors from '../../vars'
import getImageUrl from '../../utils'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

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

const Hero = () => {
  return (
    <Box
        sx={{
            display:'flex',
            flexDirection:{xs:'column', sm:'column', md:'row'},
            gap:{xs:'30px', sm:'20px', md:'0'},
            alignItems: 'center',
            justifyContent: 'center',
            p: '20px 100px'
        }}
        >
            <Box flex={1}
                sx={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: {xs:'center', sm:'center', md: 'flex-start'}
                }}
            >
                <Box mb={'15px'}>
                    <Typography variant='h2' fontWeight={600} color={colors.lightGray} >
                        Captivate Your Audience With Exceptional Voiceovers 
                        <GraphicEqIcon sx={{
                            background:colors.lightGray,
                            padding:'2px 4px',
                            borderRadius: '5px',
                            color:'white',
                            margin: '4px',
                            ml: '20px',
                            fontSize:'30px'}}/>
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
                    flexDirection:{xs:'column', sm:'row'},
                    justifyContent: 'flex-start',
                    gap:'20px'
                }}
                >
                    <PrimBtn variant="contained">Get Started Now <ChevronRightIcon/> </PrimBtn>
                    <PrimBtnOutline variant="outlined">Explore Demo</PrimBtnOutline>
                </Box>
            </Box>
            <Box flex={1} textAlign={'right'} sx={{width:{sm:'75%', md:'100%'}}}>
                <img src={getImageUrl('hero/hero.png')} alt="hero" width={'80%'}/>
            </Box>
        </Box>
  )
}

export default Hero