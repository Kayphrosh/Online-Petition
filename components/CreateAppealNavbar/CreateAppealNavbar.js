import React from 'react'

const CreateAppealNavbar = () => {
  return (
    <div className='appeal-navbar'>
      
      <button className='exit-btn'>
        <img src="/Images/exitIcon.svg" alt="" />
        <p> Exit</p>
      </button>

      <div className='logo'>
            <h4>
                <span id='petition'>Appeal</span> 
                <span id='power'>Ease</span>    
            </h4>
        </div>
    </div>
  )
}

export default CreateAppealNavbar
