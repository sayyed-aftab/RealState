import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Company from './company/Company';
import Residencies from './Residencies/Residencies';
import Value from './company/Value';
import Video from './company/Video';
import Banner from'./company/Banner';
import Contact from'./company/Contact';
import Footer from './company/Footer';


function App() {
  return (<>
   <Header/>
   <Hero/>
 <Company/>
 <Residencies/>
 <Value/>
 <Video/>
 <Banner/>
 <Contact/>
 <Footer/>  
   </>
  );
}

export default App;
