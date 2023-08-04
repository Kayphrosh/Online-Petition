import React from 'react'
import Navbar from '@/components/Navbar/navbar'
import Heroe from '@/components/LandingPage/HeroeSection/Heroe'
import LatestPetition from '@/components/LandingPage/LatestPetitionSection/LatestPetition'
import SuccessPetition from '@/components/LandingPage/LatestPetitionSection/SuccessPetition'
import Faq from '@/components/LandingPage/FAQ/FAQ'
const Landing = () => {
  return (
    <section className='container'>
      <Navbar />
      <Heroe />
      <LatestPetition />
      <SuccessPetition />
      <Faq />
    </section>
  )
}

export default Landing