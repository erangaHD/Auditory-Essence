import { Avatar, Box, Paper, Typography, styled } from '@mui/material'
import React from 'react'
import colors from '../../vars'
import getImageUrl from '../../utils'

const TestimonialCard = (props) => {

    const photo = getImageUrl(`testimonial/${props.photo}`)    
    const bg = getImageUrl('testimonial/bg1.jpg')    

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: colors.white,
        backgroundImage: `url(${bg})`,
        backgroundPosition:'left',
        backgroundSize:'cover',
        // backgroundSize:'300px',
        backgroundRepeat: 'no-repeat',        
        borderRadius: '10px',
        ...theme.typography.body2,
        padding: '20px',
        cursor: 'pointer',
        color: colors.white,
        minHeight:'300px',
        maxWidth: '800px'
      }));

  return (
    <Box sx={{display:'flex', justifyContent:'center'}}>
        <Item>
            <Box 
            sx={{
                display:'flex', 
                flexDirection:{xs:'column',sm:'row'},
                alignItems:'center', 
                justifyContent:'center', 
                height:'100%', 
                gap:'20px'
                }}>
                <Box sx={{p:'20px',display:'flex', alignItems:'center', justifyContent:'space-between', height:'100%'}}>
                    <Avatar
                    alt={props.name}
                    src={photo}
                    sx={{ width: 120, height: 120,
                        boxShadow: '3px 3px 10px rgba(188,2,236,0.6)' }}
                    />
                </Box>
                <Box 
                sx={{
                    display:'flex', 
                    flexDirection:'column', 
                    justifyContent:'center', 
                    p:'20px',
                    gap:'40px'}} >
                    <Typography color={colors.blue} sx={{ fontStyle: 'italic' }}>
                        <span style={{color:colors.midGray}}>"</span>
                        {props.message}
                        <span style={{color:colors.midGray}}>"</span>
                    </Typography>
                    <Box>
                    <Typography variant='h6' align='right' color={colors.blue}><i>{props.name}</i></Typography>
                    <Typography variant='subtitle1' align='right' color={colors.primaryPink}><i>{props.job}</i></Typography>
                    <Typography variant='subtitle2' align='right' color={colors.primaryPink}><i>{props.company}</i></Typography>
                    </Box>
                </Box>
            </Box>
        </Item>
    </Box>
  )
}

export default TestimonialCard

