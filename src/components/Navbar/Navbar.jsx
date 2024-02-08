import React, { useState } from 'react'
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material';
import getImageUrl from '../../utils'
import colors from '../../vars'
import Fade from '@mui/material/Fade';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const NavToolbar = styled(Toolbar)({
    display:'flex',
    
})

const MenuTypography = styled(Typography)({
    color:colors.black,
    cursor:'pointer'
})

const MenuBtnText = styled(Button)({
    color:colors.darkGray,
    fontWeight:600,
    textTransform: 'capitalize',
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
    textTransform: 'capitalize',
    '&:hover': {
        boxShadow: `0px 3px 3px ${colors.primaryPurple}`,        
      },
})

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const menuItems = [
        {name:'Home' , link:'/'},
        {name:'About' , link:'/'},
        {name:'Service' , link:'/'},
        {name:'Pricing' , link:'/'},
        {name:'Testimonials' , link:'/'},
        {name:'Contact' , link:'/'}
    ]

  return (
    <AppBar sx={{background: `linear-gradient(to right, ${colors.shade}, ${colors.white})`}} 
    elevation={0}
    position='fixed'>
        <NavToolbar sx={{justifyContent:{xs:'space-between', md:'space-around'}}}>
            <Box ><img src={getImageUrl('navbar/logo.png')} alt="logo" style={{width:'100px', mt:'5px', mb:'5px'}} /></Box>
            <Box sx={{
                display:{xs: 'none', md:'flex'},
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
            <MenuBtnText variant="text" sx={{display:{xs: 'none', md:'flex'}}}>Login</MenuBtnText>
            <MenuBtnCont variant="contained" sx={{display:{xs: 'none', md:'flex'}}}>Get Started</MenuBtnCont>
            
            <IconButton  sx={{cursor:'pointer'}}           
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >                
                {open ? 
                <CloseIcon sx={{color:colors.black, fontSize:'45px', display:{xs:'block', md:'none', cursor:'pointer'}}} /> : 
                <MenuIcon sx={{color:colors.black, fontSize:'45px', display:{xs:'block', md:'none', cursor:'pointer'}}} />}
            </IconButton>
            </Box>

            <Menu
                sx={{
                    width:'1200px'
                }}
                id="fade-menu"
                MenuListProps={{
                'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}                
            >
                <Box
                sx={{
                    width:{xs:'180px', sm:'350px'},
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                >

                    {
                        menuItems.map((item, id) => {
                            return <MenuItem onClick={handleClose}>
                                {item.name}
                                </MenuItem>
                        })
                    }
                    <Box sx={{
                        display:'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px',
                        margin: '10px'
                    }}>                
                    <MenuBtnText variant="text">Login</MenuBtnText>                            
                    <MenuBtnCont variant="contained">Get Started</MenuBtnCont>
                    </Box>              
                </Box>
                
            </Menu>
        </NavToolbar>

    </AppBar>
  )
}

export default Navbar