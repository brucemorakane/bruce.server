import React from 'react'
import Navbar from '../Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../Components/Slider';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';




const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Cards/>
        <Footer/>
       
       
    </div>
  )
}

export default Home