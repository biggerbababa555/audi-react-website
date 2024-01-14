import Carousel from 'nuka-carousel';

function Exterior() {
  const imgStyle = {
    maxWidth: '100%',
    height: '100%',
  };

  return (
    <Carousel>
      <img src="https://www.audi.co.th/content/dam/nemo/sea/th/models/q7/q7-tfsi-e/my-2022/NeMo-Derivate-Startpage/stage/1920x1080-AQ7_TFSIe_191005.jpg?imwidth=1440" style={imgStyle} alt="Audi Exterior 1" />
      <img src="https://hips.hearstapps.com/hmg-prod/images/2024-audi-q7-102-6495edad98657.jpg?crop=0.583xw:0.436xh;0.333xw,0.439xh&resize=1200:*" style={imgStyle} alt="Audi Exterior 2" />
    </Carousel>
  );
}

export default Exterior;
