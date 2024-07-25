import NavBar from './components/NavBar';
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import Platform from './components/Platform';
import Values from './components/Values';
import Question from './components/Question';
import Newsletter from './components/Newsletter';
// import Footers from './components/Footers';
import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className=' overflow-x-hidden overflow-y-hidden'>
        <NavBar />
        <Main />
        <AboutUs />
        <Platform />
        <Values />
        <Question />
        <Newsletter />
        <Footer/>

        {/* <Footers/> */}
        
      </div>
    </>
  );
}

export default App;
