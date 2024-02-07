import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography, styled } from '@mui/material';
import getImageUrl from '../../utils'
import colors from '../../vars'


const NavToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-around'
})

const MenuTypography = styled(Typography)({
    color:colors.black,
    cursor:'pointer'
})

const MenuBtnText = styled(Button)({
    color:colors.darkGray,
    fontWeight:600,
    '&:hover': {
        background:'transparent',
        borderColor: colors.optionalPurple,
        boxShadow: `0px 3px 3px ${colors.secondaryPurple}`,
      },
})
const MenuBtnCont = styled(Button)({    
    background: `linear-gradient(to bottom, ${colors.primaryPurple}, ${colors.secondaryPurple})`,
    borderRadius: '7px',
    fontSize:'12px',
    paddingBottom:'10px',
    paddingTop:'10px',
    boxShadow: '0px 3px 6px rgba(188,2,236,0.6)',
    '&:hover': {
        boxShadow: `0px 3px 3px ${colors.primaryPurple}`,        
      },
})

const Navbar = () => {

    const menuItems = [
        {name:'Home' , link:'/'},
        {name:'About' , link:'/'},
        {name:'Service' , link:'/'},
        {name:'Pricing' , link:'/'},
        {name:'Contact' , link:'/'}
    ]

  return (
    <AppBar sx={{background: `linear-gradient(to right, ${colors.shade}, ${colors.white})`}} 
    elevation={0}
    position='fixed'>
        <NavToolbar>
            <Box ><img src={getImageUrl('navbar/logo.png')} alt="logo" style={{width:'100px', mt:'5px', mb:'5px'}} /></Box>
            <Box sx={{
                display:'flex',
                gap: '30px'
            }}>
                {
                    menuItems.map((item, id) => {
                        return <MenuTypography variant="subtitle1" key={id} >
                            {item.name}
                        </MenuTypography>
                    })
                }
                
            </Box>
            <Box sx={{display:'flex', gap:'30px'}}>
            <MenuBtnText variant="text">Login</MenuBtnText>
            <MenuBtnCont variant="contained">Get Started</MenuBtnCont>
            </Box>
        </NavToolbar>

    </AppBar>
  )
}

export default Navbar