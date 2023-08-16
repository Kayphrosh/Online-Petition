import React from 'react'
import { useRouter } from 'next/router';

const CreateAppealNavbar = () => {

    const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div className='appeal-navbar'>
      
      <button className='exit-btn' onClick={goBack}>
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
