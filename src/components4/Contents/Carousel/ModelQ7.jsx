import Carousel from 'nuka-carousel';
import './Interior.css'
function ModelQ7() {
  const imgStyle = {
    maxWidth: '100%',
    height: '700px', // Allow the height to adjust proportionally
    width: '100%', // Make the width 100% of the container
  };

  return (
    <div data-aos="fade-up">
      
    <Carousel>
      <img
        src="https://www.audi.co.th/content/dam/nemo/models/q7/q7-tfsi-e/my-2022/NeMo-Derivate-Startpage/Feature-gallery/AQ7_TFSIe_191003_RGB-xl.jpg?imwidth=1920&imdensity=1"
        style={imgStyle}
        alt="Audi Interior 1"
      />
      <img
        src="https://www.audi.co.th/content/dam/nemo/models/q7/q7-tfsi-e/my-2022/NeMo-Derivate-Startpage/Feature-gallery/1920x900-audi-AQ7-exterior-191007.jpg?imwidth=1920&imdensity=1"
        style={imgStyle}
        alt="Audi Interior 2"
      />
      <img
        src="https://www.audi.co.th/content/dam/nemo/models/q7/q7-tfsi-e/my-2022/NeMo-Derivate-Startpage/Feature-gallery/2020_1453_v1_de-xl.jpg?imwidth=1920&imdensity=1"
        style={imgStyle}
        alt="Audi Interior 3"
      />
      <img
        src="https://www.audi.co.th/content/dam/nemo/models/q7/q7-tfsi-e/my-2022/NeMo-Derivate-Startpage/Feature-gallery/1920x900-AQ7_TFSIe_D_191001_RGB.jpg?imwidth=1920&imdensity=1"
        style={imgStyle}
        alt="Audi Interior 4"
      />
    </Carousel>
    </div>
  );
}

export default ModelQ7;
