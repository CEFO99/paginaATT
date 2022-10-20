import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Cards from '../components/Cards'

const work = () => {
  return (
    <div>
        <Hero heading='My Work' message='This is some of my recent work traveling the world.' />
        <Cards />
        <Portfolio />
    </div>
  )
}

export default work