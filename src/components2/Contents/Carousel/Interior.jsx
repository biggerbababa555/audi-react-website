import Carousel from 'nuka-carousel';
import './Interior.css'
function Interior() {
  const imgStyle = {
    maxWidth: '100%',
    height: 'auto', // Allow the height to adjust proportionally
    width: '100%', // Make the width 100% of the container
  };

  return (
    <Carousel>
      <img
        src="https://mediacloud.carbuyer.co.uk/image/private/s--4f0XOxUs--/v1609859057/carbuyer/2021/01/Audi%20Q5%2040%20TDI%20review%20pictures-3.jpg"
        style={imgStyle}
        alt="Audi Interior 1"
      />
      <img
        src="https://www.topgear.com/sites/default/files/cars-car/carousel/2021/04/a210251_medium_0.jpg"
        style={imgStyle}
        alt="Audi Interior 2"
      />
    </Carousel>
  );
}

export default Interior;
