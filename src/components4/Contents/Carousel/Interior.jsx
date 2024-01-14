import Carousel from 'nuka-carousel';
import './Interior.css'
function Interior() {
  const imgStyle = {
    maxWidth: '100%',
    height: '700px', // Allow the height to adjust proportionally
    width: '100%', // Make the width 100% of the container
  };

  return (
    <Carousel>
      <img
        src="https://www.topgear.com/sites/default/files/2022/03/1913-AUDIQ7TFSIE011_0.jpg"
        style={imgStyle}
        alt="Audi Interior 1"
      />
      <img
        src="https://cdn.carbuzz.com/gallery-images/2024-audi-q7-dashboard-carbuzz-853138-1600.jpg"
        style={imgStyle}
        alt="Audi Interior 2"
      />
    </Carousel>
  );
}

export default Interior;
