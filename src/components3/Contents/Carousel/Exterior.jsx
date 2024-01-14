import Carousel from 'nuka-carousel';

function Exterior() {
  const imgStyle = {
    maxWidth: '100%',
    height: '900px',
  };

  return (
    <Carousel>
      <img src="https://uploads.audi-mediacenter.com/system/production/media/83906/images/8845e82f46c55fbb1de6a17ecfdbe33c53e553c8/A1911787_web_2880.jpg?1698391737" style={imgStyle} alt="Audi Exterior 1" />
      <img src="https://www.topgear.com/sites/default/files/cars-car/image/2017/01/gfp_15104935.jpg" style={imgStyle} alt="Audi Exterior 2" />
    </Carousel>
  );
}

export default Exterior;
