import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import '@/main.css'

import '@/assets/styles/global.css';
import '@/assets/styles/layout.css';
import '@/assets/styles/components.css';
import '@/assets/styles/pages.css';
import '@/assets/styles/utilities.css';
import '@/assets/styles/blog.css';
import '@/assets/styles/navbar.css';
import '@/assets/styles/cards.css';
import '@/assets/styles/skick-custom.css';
import '@/assets/styles/about.css'
import '@/assets/styles/timeline.css'
import '@/assets/styles/Skills.css';
import '@/assets/styles/footer.css';
import '@/assets/styles/interest.css';
import '@/assets/styles/contact.css';
import '@/assets/styles/foto.css';
import '@/assets/styles/internship.css';


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
    <Footer />
    </BrowserRouter>
  </StrictMode>
)