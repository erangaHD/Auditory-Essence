import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import colors from '../../vars'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  return (
    <Box 
    sx={{
      pt:'50px', 
      pb:'50px', 
      background: `linear-gradient(to right, ${colors.shade}, ${colors.white})`}}>
    <Container >
      <Typography align='center' variant='h3' sx={{fontWeight:500, mb:'40px',color:colors.primaryPurple}}>
          Testimonials
      </Typography>
      <Box sx={{display:'flex', justifyContent:'center'}}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        
      </Swiper>
      </Box>
    </Container>
    </Box>
  )
}

export default Testimonial