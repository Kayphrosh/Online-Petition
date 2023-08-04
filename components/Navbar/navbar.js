import React, {useState, useEffect} from 'react'


const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const img = "/Images/searchIcon.svg"
  return (
    <div className={`navbar ${scrolling ? 'scrolling' : ''}`}>
        <div className='logo'>
            <h4>
                <span id='petition'>Petiton</span> 
                <span id='power'>Power</span>    
            </h4>
        </div>


        <ul className='nav-links'>
            <li className='active-link'>Home</li>
            <li>Explore</li>
            <li>FAQ</li>
            <li>Login</li>
        </ul>

        <div className='cta-btn'>
            <button id='btn1'>
                <img src="/Images/searchIcon.svg" alt="" />
            </button>

            <button id='btn2'>
                Start Your Petition
            </button>
        </div>
    </div>
  )
}

export default Navbar
