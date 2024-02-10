import { Avatar, Box, Paper, Typography, styled } from '@mui/material'
import React from 'react'
import colors from '../../vars'
import getImageUrl from '../../utils'

const TestimonialCard = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: colors.white,
        // backgroundImage: `url(${bg})`,
        // backgroundPosition:'top right',
        // backgroundSize:'100px',
        // backgroundRepeat: 'no-repeat',        
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
                    alt="roshel"
                    src={getImageUrl('testimonial/roshel.jpg')}
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
                    <Typography color={colors.lightGray} sx={{ fontStyle: 'italic' }}>
                        <span style={{color:colors.midGray}}>"</span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Voluptas laborum corporis ducimus expedita voluptatibus 
                        unde illum delectus, fuga minus in dicta placeat esse, perspiciatis 
                        deleniti quo? Ipsa inventore ea consequuntur maiores fugit ullam 
                        aliquam illo quisquam a!
                        <span style={{color:colors.midGray}}>"</span>
                    </Typography>
                    <Box>
                    <Typography variant='body1' align='right' color={colors.darkGray}>Roshel</Typography>
                    <Typography variant='body2' align='right' color={colors.primaryPink}>Graphic designer</Typography>
                    </Box>
                </Box>
            </Box>
        </Item>
    </Box>
  )
}

export default TestimonialCard