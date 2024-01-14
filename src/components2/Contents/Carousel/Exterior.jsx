import Carousel from 'nuka-carousel';

function Exterior() {
  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <Carousel>
      <img src="https://www.topgear.com/sites/default/files/2023/10/19%20Audi%20Q5.jpg" style={imgStyle} alt="Audi Exterior 1" />
      <img src="https://www.motortrend.com/uploads/2023/07/11204-2024-Audi-Q5-Sportback-front-view.jpg" style={imgStyle} alt="Audi Exterior 2" />
    </Carousel>
  );
}

export default Exterior;
