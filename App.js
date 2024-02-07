// import logo from './logo.svg';
import './App.css';
import Article from './component/Article';
import Footer from './component/Footer';
import Header from './component/Header';
import Herobanner from './component/Herobanner';
import Partners from './component/Partners';
import Review from './component/Review';
import Service from './component/Service';



function App() {
  return (
    <>
      <Header />
      {/* <hr className='text:violet-400'/> */}
      <Herobanner />
      <Service/>
      <Article />
      <Partners />
      <Review />
      <Footer/>
      
    </>
  );
}

export default App;
