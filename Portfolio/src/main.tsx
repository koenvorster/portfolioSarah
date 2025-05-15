import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import './main.css'
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