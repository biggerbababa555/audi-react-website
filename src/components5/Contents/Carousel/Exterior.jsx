import Carousel from 'nuka-carousel';

function Exterior() {
  const imgStyle = {
    maxWidth: '100%',
    height: '700px',
  };

  return (
    <Carousel>
      <img src="https://www.audi.co.th/content/dam/nemo/sea/th/models/a7/rs-7-sportback/my-2022/nemo-derivate-startpage/feature-gallery/1920x900-A1911979.jpg?imwidth=1920&imdensity=1" style={imgStyle} alt="Audi Exterior 1" />
      <img src="https://www.audi.co.th/content/dam/nemo/models/a7/rs-7-sportback/my-2022/nemo-derivate-startpage/feature-gallery/1920x900-rs7_2020_1544.jpg?imwidth=1920&imdensity=1"style={imgStyle} />
    </Carousel>
  );
}

export default Exterior;
