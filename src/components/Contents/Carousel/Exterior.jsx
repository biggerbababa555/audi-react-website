import Carousel from 'nuka-carousel';

function Exterior() {
  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <Carousel>
      <img src="https://www.audi.co.th/content/dam/nemo/sea/th/models/a4/a4-sedan/my-2023/feature-gallery/1920x900-5.jpg?imwidth=1920&imdensity=1" style={imgStyle} alt="Audi Exterior 1" />
      <img src="https://www.audi.co.th/content/dam/nemo/sea/th/models/a4/a4-sedan/my-2023/feature-gallery/1920x900-6.jpg?imwidth=1920&imdensity=1" style={imgStyle} alt="Audi Exterior 2" />
    </Carousel>
  );
}

export default Exterior;
