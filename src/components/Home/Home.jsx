import { Box } from '@mui/material'
import React from 'react'
import colors from '../../vars'
import Hero from '../Hero/Hero'
import Benifits from '../Benifits/Benifits'

const Home = () => {
  return (
    <Box sx={{
        pt:'80px',
        background: `linear-gradient(to right, ${colors.shade}, ${colors.white})`
    }}>
        <Hero/>
        <Benifits/>
    </Box>
  )
}

export default Home