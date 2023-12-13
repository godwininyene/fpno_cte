import React, {useEffect, Children } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import Navigation from '@/Components/Navigation';
import Footer from '@/Components/Footer';



const BaseLayout = ({children}) => {
    useEffect(()=>{
        AOS.init();
      })
  return (
    <div className='relative'>
        <Navigation />
       
      { children }
        <Footer />
    </div>
  )
}

export default BaseLayout