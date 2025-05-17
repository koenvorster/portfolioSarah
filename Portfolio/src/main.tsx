import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import './main.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/styles/global.css';
import './assets/styles/layout.css';
import './assets/styles/components.css';
import './assets/styles/pages.css';
import './assets/styles/utilities.css';
import './assets/styles/blog.css';

import {BrowserRouter} from 'react-router-dom'
import Navbar from '@/components/Navbar.tsx'
import Routing from '@/navigation/Routing.tsx'
import Footer from '@/components/ui/Footer.tsx'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
        <Routing/>
    </BrowserRouter>
    <Footer />
  </StrictMode>
)