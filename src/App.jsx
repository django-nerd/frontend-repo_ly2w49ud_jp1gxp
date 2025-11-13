import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Ecosystem, Innovation, Global, Investors, Press, Footer } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <Hero />
      <About />
      <Ecosystem />
      <Innovation />
      <Global />
      <Investors />
      <Press />
      <Footer />
    </div>
  )
}

export default App
