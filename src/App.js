import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import FeacturedTours from './components/FeacturedTours';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Services />
    <FeacturedTours />
    <Contact />
    <Gallery />
    <Footer />
    </>
  );
}

export default App;
