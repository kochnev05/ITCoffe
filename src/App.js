import './App.css';
import InfoComponent from './Component/InfoComponent';
import Carousel from './Component/Carusel';
import FadeIn from './Component/FadeIn';
import Promo from './Component/Promo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src='https://i.pinimg.com/originals/ab/13/6b/ab136b1a54b9197bb6554f8a3c080a1f.png' className='logo'></img>
          <hr className='vercialLine'></hr>
          <li><a href='#'>Main</a></li>
          <hr className='vercialLine'></hr>
          <li><a href='#'>Catalog</a></li>
          <hr className='vercialLine'></hr>
          <li><a href='#'>Contact</a></li>
          <hr className='vercialLine'></hr>
          <li><a href='#'>About Us</a></li>
          <hr className='vercialLine'></hr>
        </nav>
      </header>
      <FadeIn>
        <Promo />
      </FadeIn>
      <InfoComponent />
      <Carousel />

    </div>
  );
}

export default App;
