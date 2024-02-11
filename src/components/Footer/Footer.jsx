import React from 'react'
import colors from '../../vars'
import getImageUrl from '../../utils'
import { Box, Button, Divider, Grid, TextField, Typography, styled } from '@mui/material'

import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ContactBox = styled(Box)({
    display:'flex',
    gap: '10px',
    color: colors.white
})

const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: colors.blue,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: colors.blue,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: colors.blue,
        },
        '&:hover fieldset': {
          borderColor: colors.blue,
        },
        '&.Mui-focused fieldset': {
          borderColor: colors.blue,
        },
      },
})

const Footer = () => {
  return (
    <Box
    sx={{
        background:colors.black
    }}
    >
        <Box>

            <Grid container spacing={5} justifyContent={'center'} sx={{p:'50px'}} alignItems={'flex-start'}>
            <Grid item xs={12} sm={6} md={3} color={colors.white}>
                <Box 
                sx={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap:'10px'
                }}
                >
                    <img src={getImageUrl('navbar/logo.png')} alt="logo" width={'100px'} />
                    <Typography variant='caption'>
                        We Are An Online Service Provider That Provides To Voiceovers 
                        To Many Different Companies. We Specialize In On Hold Music And Voicemails 
                        And Greeting.
                    </Typography>
                    
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
                <Box>
                    <ContactBox>
                        <PhoneIcon/>
                        <Typography variant='body2'>+94 11 123 4567</Typography>
                    </ContactBox>
                    <ContactBox>
                        <LocationOnIcon/>
                        <Typography variant='body2'>No. 03, Worldtrade Center, Colombo</Typography>
                    </ContactBox>
                    <ContactBox>
                        <EmailIcon/>
                        <Typography variant='body2'>info@auditoryessence.com</Typography>
                    </ContactBox>
                    <ContactBox>
                        <LanguageIcon/>
                        <Typography variant='body2'>www.auditoryessence.com</Typography>
                    </ContactBox>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
                <Box sx={{color: colors.white}}>

                    <Typography variant='body1' align='center'>Follow Us</Typography>

                    <Box 
                    sx={{
                        display:'flex', 
                        gap:'10px',
                        justifyContent:'center',
                        cursor:'pointer'
                    }}>
                        <FacebookIcon fontSize='large' sx={{'&:hover': {color: colors.blue,},}}/>
                        <InstagramIcon fontSize='large' sx={{'&:hover': {color: colors.blue,},}}/>
                        <YouTubeIcon fontSize='large' sx={{'&:hover': {color: colors.blue,},}}/>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
                <Box sx={{color:colors.white, display:'flex', flexDirection:'column', gap:'20px'}}>
                    <Typography>
                        News Letter
                    </Typography>
                    <StyledTextField id="email" label="Your Email" variant="standard" focused />
                    <Button variant="contained"
                    sx={{
                        borderRadius:'20px',
                        background: colors.primaryPurple,
                        fontSize:'11px',
                        width: '90px',
                        '&:hover': {
                            background: colors.blue,        
                        },
                    }}
                    >Subscribe</Button>
                </Box>
            </Grid>
            </Grid>
        </Box>
        <Box sx={{p:'0 20px 20px 20px', textAlign:'center'}}>
            <Divider color={colors.shade} sx={{mb:'10px'}}/>
            <Typography color={colors.shade} variant='caption'>
                <span>&#169;</span> 2024 - Auditory Essence
            </Typography>
        </Box>
    </Box>
  )
}

export default Footer