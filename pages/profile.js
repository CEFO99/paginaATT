import React from 'react'
import Profile from '../components/Profile'
import Slider from '../components/Slider'
import { SliderData } from '../components/SliderData'
import Instagram from '../components/Instagram'
import Footer from '../components/Footer'

const profile = () => {
  return (
    <div>
        <Profile />
        <Slider slides={SliderData} />
        <Instagram />
        <Footer />
    </div>
  )
}

export default profile