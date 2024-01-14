// import Carousel from 'nuka-carousel';
import './Interior.css'
function Musicplay() {
  const imgStyle = {
    maxWidth: '100%',
    height: 'auto', // Allow the height to adjust proportionally
    width: '100%', // Make the width 100% of the container
  };

  return (
    
      <div data-aos="fade-up">
      <img
        src="https://www.audi.co.th/content/dam/nemo/models/q5/apple-music/Q5_2022_3721-L.jpg?imwidth=1440"
        style={imgStyle}
      />
      </div>  

  );
}

export default Musicplay;
