import videoBg from '../images/AudiQ7.mp4'
import './Contens.css'
import './Textanimation.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Contens = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className='main'>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content" style={{ display: 'flex', flexDirection: 'column' }}>
        <div data-aos="fade-up" data-aos-duration="3000">
          <h3 data-text="Audi" style={{ marginBottom: '10px' }}>Audi</h3>
          <h1>Q7</h1>
        </div>


      </div>




    </div>

  )
}

export default Contens