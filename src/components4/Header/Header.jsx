import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Audilogo from '../images/Audi-Logo.png';

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
    console.log(isSticky);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },);
  const buttonStyle = { color: 'white' };
  return (
    <>
      <div className={"wrapper"}>
        <div className='logo'>
          <Link to='/'>
            <div className='logopad'>
            <img src={Audilogo} alt="Audi Logo" style={{ width: '100%' }} />
            </div>
          </Link>
        </div>
        <div className='content'>
        <Link to='/' style={buttonStyle}>Audi A4</Link>
        <Link to='/AudiQ5' style={buttonStyle}>Audi Q5</Link>
        <Link to='/AudiA5' style={buttonStyle}>Audi A5</Link>
        <Link to='/AudiQ7' style={buttonStyle}>Audi Q7</Link>
        <Link to='/AudiRS7' style={buttonStyle}>Audi RS7</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
