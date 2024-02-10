import React from 'react'
import colors from '../../vars'
import getImageUrl from '../../utils'
import { Box, Button, Grid, Paper, Typography, styled } from '@mui/material';

const PriceCard = (props) => {


    const bg = getImageUrl(`pricing/${props.bg}`)

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: colors.darkGray,
        backgroundImage: `url(${bg})`,
        backgroundPosition:'top right',
        backgroundSize:'100px',
        backgroundRepeat: 'no-repeat',
        border: `1px ${colors.shade} solid`,
        borderRadius: '20px',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        cursor: 'pointer',
        color: colors.white,
        minHeight:'300px'
      }));

  return (
    <Grid item xs={12} sm={6} md={4} >
    <Item>
          <Box sx={{p:'10px', display:'flex', flexDirection:'column', gap:'20px'}}>
              <Box >
                <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                  <Typography 
                  color={colors.black}
                  variant='caption'
                  sx={{p:'4px 10px', borderRadius:'20px', background:props.colorPrim, fontWeight:500}}>
                    {props.name}
                  </Typography>
                </span>
              </Box>
              <Box sx={{display:'flex', gap:'5px', alignItems:'flex-end'}}>
                <Box sx={{display:'flex', alignItems:'flex-start'}}>
                  <Typography sx={{color:props.colorSecond}}><i>{props.dolor}</i></Typography>
                  <Typography variant='h2' ><i>{props.price}</i></Typography>
                </Box>
                <Box>
                  <Typography variant='caption'><i>{props.topic}</i></Typography>
                </Box>                
              </Box>
                <Box sx={{p:'20px', background:colors.midGray, borderRadius:'20px'}}>
                  <Typography sx={{fontWeight:500}} mb={'6px'} color={props.colorSecond} variant='body2'><i>{props.subtopic}</i></Typography>
                  <Typography variant='caption'>{props.description}</Typography>

                  {
                    props.button ?
                    <Box sx={{display:'flex', justifyContent:'center', width:'100%', mt:'20px'}}>
                        <Button variant="contained"
                        sx={{
                            width:'100%',
                            borderRadius:'20px',
                            background: colors.optionalPurple,
                            textTransform: 'capitalize',
                            '&:hover': {
                                background: colors.secondaryPurple,        
                              },
                        }}
                        >Contact Sales</Button>
                    </Box> :
                    <Box></Box>
                  }

                    
                </Box>

                
              </Box>
            
          
        </Item>
        </Grid>
  )
}

export default PriceCard