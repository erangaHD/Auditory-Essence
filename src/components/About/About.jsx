import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import getImageUrl from '../../utils'
import colors from '../../vars'

const About = () => {
  return (
    <Box 
    sx={{
        background:colors.black, 
        color:colors.white
    }}>
        <Container
        sx={{
            display:'flex',
            flexDirection: {xs:'column', sm:'row'},
            gap:{xs:'20px', sm:'0px'},
            alignItems:'center', 
            pt:'30px',
            pb:'30px'
        }}
        >
            <Box flex={4}
            sx={{
                display:'flex',
                flexDirection: 'column',
                gap:'20px'
            }}
            >
                <Box>
                    <Typography
                    sx={{                        
                        p:'8px', 
                        background: colors.lightGray,
                        borderRadius:'20px',
                        maxWidth:'255px'                      
                    }}
                    variant='caption'
                    align='center'
                    >
                        WHO IS AUDITORY ESSENCE?
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h3' sx={{fontWeight:900}}>
                        We'll help <span style={{color:colors.primaryPink}}>digitally</span><br /> transform your business.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='body2'>
                        Music experts, digital artists, content creators and customer service champions 
                        - all driven to bring a fresh perspective to every Customer Experience we design. 
                        Backed by a global service network of certified technicians, our legacy of proven 
                        success is what sets us apart. Our passion is why we succeed.
                    </Typography>
                </Box>
                <Box sx={{mt:'60px'}}>
                    <Button
                    sx={{
                        background: colors.primaryPink,
                        borderRadius: '30px',
                        p: '15px 25px',
                        '&:hover': {
                            background: colors.primaryPurple,              
                          },
                    }}
                    variant="contained">Get started for now</Button>
                </Box>
            </Box>
            <Box flex={3}>
                <img src={getImageUrl('about/about.png')} alt="about" width={'100%'}/>
            </Box>
        </Container>
    </Box>
  )
}

export default About