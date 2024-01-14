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
        src="https://carwow-uk-wp-3.imgix.net/AudiUK00001822.jpg"
        style={imgStyle}
        alt="Audi Interior 1"
      />
      <img
        src="https://uploads.audi-mediacenter.com/system/production/media/83917/images/6d14c092d9853c9e6a063f182c8bad987ddace59/A1911798_web_2880.jpg?1698391776"
        style={imgStyle}
        alt="Audi Interior 2"
      />
    </Carousel>
  );
}

export default Interior;
