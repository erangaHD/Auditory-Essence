import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

import colors from '../../vars'
import getImageUrl from '../../utils'

const ServiceCard = (props) => {
    const image = getImageUrl(`service/${props.image}`)
  return (
    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{
                            borderRadius: '20px',
                            boxShadow: '-3px 3px 20px rgba(230,234,239, 1)',
                        }}>
                            <Box
                            sx={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                height:'200px',
                                width:'100%',
                                borderRadius: '20px'
                            }}
                            ></Box>
                            <Box sx={{p:'15px'}}>
                                <Typography variant='body1' sx={{fontWeight:600, m:'10px 0'}}>
                                    {props.topic}
                                </Typography>
                                <Typography variant='body2' color={colors.lightGray}>
                                    {props.description}
                                </Typography>
                            </Box>                            
                        </Box>
                    </Grid>
  )
}

export default ServiceCard