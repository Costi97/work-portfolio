import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { About, Experience, Contact, Hero, Navbar, Tech, Works, Footer } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div className='bg-[url("./src/assets/herobg2.jpg")] bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <div className='container mx-auto'>
            <Hero />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
