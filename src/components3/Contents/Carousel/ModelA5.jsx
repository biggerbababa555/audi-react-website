import Carousel from 'nuka-carousel';
import './Interior.css'
function ModelA5() {
  const imgStyle = {
    maxWidth: '100%',
    height: '700px', // Allow the height to adjust proportionally
    width: '100%', // Make the width 100% of the container
  };

  return (
    <div data-aos="fade-up">
      
    <Carousel>
      <img
        src="https://www.audi.co.th/content/dam/nemo/sea/th/models/a5/rs-5-coupe/my-2024/derivative-startpage/feature-gallery/1920x900-A222145_large.jpg?imwidth=1920&imdensity=1"
        style={imgStyle}
        alt="Audi Interior 1"
      />
      <img
        src="https://www.audi.co.th/content/dam/nemo/sea/th/models/a5/rs-5-coupe/my-2024/derivative-startpage/feature-gallery/1920x900-A222151_large_2.jpg?imwidth=1920&imdensity=1"
        style={imgStyle}
        alt="Audi Interior 2"
      />
      <img
        src="https://www.audi.co.th/content/dam/nemo/sea/th/models/a5/rs-5-coupe/my-2024/derivative-startpage/feature-gallery/1920x900-A222123_large.jpg?imwidth=1920&imdensity=1"
        style={imgStyle}
        alt="Audi Interior 3"
      />
      <img
        src="https://www.audi.co.th/content/dam/nemo/sea/th/models/a5/rs-5-coupe/my-2024/derivative-startpage/feature-gallery/1920x900-RS5_2020_0046.jpg?imwidth=1920&imdensity=1"
        style={imgStyle}
        alt="Audi Interior 4"
      />
    </Carousel>
    </div>
  );
}

export default ModelA5;
