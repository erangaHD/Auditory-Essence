import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import OfflineBoltRoundedIcon from '@mui/icons-material/OfflineBoltRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import colors from '../../vars'


const BenifitCard = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
                    <Box 
                    sx={{  
                        display: 'flex',
                        flexDirection: 'column',                      
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        background:colors.shade, 
                        p:'18px 20px' ,
                        boxShadow: '-3px 3px 10px rgba(255, 255, 255, 0.6)',
                    }}
                    >                        
                        <Box>
                            {
                                props.name === 'On Hold Message' ? 
                                <SmsRoundedIcon fontSize='large' sx={{m:'20px 0 10px 0', color:colors.primaryPurple}}/> : 
                                props.name === 'Risk-Free Demo' ? 
                                <OfflineBoltRoundedIcon fontSize='large' sx={{m:'20px 0 10px 0', color:colors.primaryPurple}}/> : 
                                props.name === 'Campaign Management' ?
                                <GroupsRoundedIcon fontSize='large' sx={{m:'20px 0 10px 0', color:colors.primaryPurple}}/> :
                                props.name === 'Skilled Copy-writers' ?
                                <BorderColorRoundedIcon fontSize='large' sx={{m:'20px 0 10px 0', color:colors.primaryPurple}}/> :
                                props.name === 'Creative Content' ?
                                <AutoFixHighRoundedIcon fontSize='large' sx={{m:'20px 0 10px 0', color:colors.primaryPurple}}/> :
                                <SupportAgentRoundedIcon fontSize='large' sx={{m:'20px 0 10px 0', color:colors.primaryPurple}}/> 
                            }
                        </Box>
                        
                        <Typography variant='h5' sx={{fontWeight:500}} align='center'>{props.name}</Typography>
                        <Typography variant='body2' sx={{mb:'10px'}} align='center'>{props.description}</Typography>
                    </Box>                    
                </Grid>
  )
}

export default BenifitCard