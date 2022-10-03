
import {BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import { GithubProvider } from './context/github/GithubContext';

function App() {
  return (
    <GithubProvider>
        <BrowserRouter>
            <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className=' container px-3 pb-12 mx-auto'>
              <Routes>
                <Route path='/github_finder' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
    </GithubProvider>
  )
}

export default App;
