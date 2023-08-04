import React from 'react'

const Heroe = () => {
  return (
    <div className='heroe-container'>
        <main className='main-content'>           
            <div className='heroe-text'>
            <span>
            Your Petition Management App
            </span>

            <div className='text'>
                <h2>
                PetitionPower: <br/> Empowering Voices, Amplifying Change!
                </h2>
                <img src="/Images/heroeText.svg" alt="" />
            </div>

            <p className='paragraph'>
                Unleash the power of petitions with ease. Create, manage, and promote your causes effortlessly, uniting voices for meaningful change. Empower yourself and others to make a difference, one signature at a time.
            </p>

            <div className='cta-btn'>

                <button id='btn1'>
                <img src="/Images/plusIcon.svg" alt="" />
                <p>Start A Petition</p>
                </button>

                <button id='btn2'>
                <img src="/Images/scrollIcon.svg" alt="" />
                </button>

            </div>
            </div>

            <div className='illustration'>
                <img src="/Images/heroeIllustration.svg" alt="" />
            </div>
        </main>
    </div>
  )
}

export default Heroe
