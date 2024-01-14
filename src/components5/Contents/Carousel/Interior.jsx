import Carousel from 'nuka-carousel';
import './Interior.css'
function Interior() {
  const imgStyle = {
    maxWidth: '100%',
    height: '800px', // Allow the height to adjust proportionally
    width: '100%', // Make the width 100% of the container
  };

  return (
    <Carousel>
      <img
        src="https://cdn.carbuzz.com/gallery-images/2024-audi-rs7-dashboard-carbuzz-1069310-1600.jpg"
        style={imgStyle}
        alt="Audi Interior 1"
      />
      <img
        src="https://www.topgear.com/sites/default/files/2023/09/33149-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS66.jpg"
        style={imgStyle}
        alt="Audi Interior 2"
      />
    </Carousel>
  );
}

export default Interior;
