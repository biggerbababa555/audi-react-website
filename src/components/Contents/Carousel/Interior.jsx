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
        src="https://www.topgear.com/sites/default/files/cars-car/carousel/2021/03/audiuk0002288520audi20a420avant.jpg"
        style={imgStyle}
        alt="Audi Interior 1"
      />
      <img
        src="https://uploads.audi-mediacenter.com/system/production/media/81093/images/2e70ce56b43a89be32a2137f501011c6629c56f3/A198976_web_2880.jpg?1698380911"
        style={imgStyle}
        alt="Audi Interior 2"
      />
    </Carousel>
  );
}

export default Interior;
