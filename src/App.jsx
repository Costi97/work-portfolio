import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { About, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-[url("./src/assets/herobg2.jpg")] bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <div className='container mx-auto'>
            <Hero />
          </div>
        </div>
        {/* <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
