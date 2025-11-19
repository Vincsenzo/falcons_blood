import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Hero />
            <About />
            <Gallery />
            <Pricing />
            <Footer />
        </div>
    )
}

export default App
