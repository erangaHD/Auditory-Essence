import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useState } from "react";
import colors from '../../vars'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TabPanel from './TabPanel';
import PriceCard from './PriceCard';
import price from '../../data/price.json'

const Pricing = () => {

  const [period, setPeriod] = useState(0)

  const sendDataToParent = (index) => { // child to paternt data passing    
    setPeriod(index);
  };
  
  return (
    <Box sx={{background:colors.black, p:'50px 0'}}>
      <Container sx={{display:'flex', justifyContent:'space-between'}}>
        <Typography variant='h3' sx={{fontWeight:600}} color={colors.white}>
            Choose your <span style={{color:colors.primaryPink}}>pricing plan</span><br />
            or custom
        </Typography>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'flex-end', gap:'15px'}}>
          <Box sx={{display:'flex', alignItems:'center', gap:'8px'}}>
            <MonetizationOnIcon sx={{color:colors.green}}/>
            <Typography color={colors.white}>Save up to <span style={{color:colors.green}}>30%</span></Typography>
          </Box>
          <Box>           
            <TabPanel sendDataToParent={sendDataToParent}/>
          </Box>
        </Box>
        
      </Container>
        <Grid container spacing={{ xs: 1, sm: 2 }} sx={{p:'80px'}} justifyContent="center" 
        useFlexGap flexWrap={{xs:"wrap", sm:"wrap", md:"nowrap"}}>
        
        {
          period === 0 ? 
          price.map((item, id) => {
            return (
            <PriceCard key={id}
            name={item.name}
            colorPrim={item.colorPrim}
            colorSecond={item.colorSecond}
            dolor={item.dolor}
            price={item.priceM}
            topic={item.topicM}
            subtopic={item.subtopic}
            description={item.description}
            button={item.button}
            bg={item.bg}
            />
            )
          }) :
          price.map((item, id) => {
            return (
              <PriceCard key={id}
              name={item.name}
              colorPrim={item.colorPrim}
              colorSecond={item.colorSecond}
              dolor={item.dolor}
              price={item.priceY}
              topic={item.topicY}
              subtopic={item.subtopic}
              description={item.description}
              button={item.button}
              bg={item.bg}
              />
              )
          })
        }

        </Grid>
      <Container>
        <Typography variant='body1' color={colors.white}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Vitae sint iusto dolores eos tenetur. Odio quisquam ab amet perferendis, 
          id ea vel optio soluta quasi asperiores magnam. Eum voluptate labore, 
          eveniet ab architecto, placeat illum, iusto sunt cupiditate tempore tenetur 
          sapiente quod esse doloremque obcaecati aliquam odit distinctio saepe aut.
        </Typography>
      </Container>
    </Box>
  )
}

export default Pricing