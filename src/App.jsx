import { Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import PageTransition from './components/PageTransition'
import Landing from './pages/Landing'
import Works from './pages/Works'
import WorkDetail from './pages/WorkDetail'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <PageTransition />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:slug" element={<WorkDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  )
}
