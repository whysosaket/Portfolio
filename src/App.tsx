import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import LoadingBar from 'react-top-loading-bar'
import "./App.css"
import { useState } from "react"

function App() {
  const [progress, setProgress] = useState(0)

  const handleUpdateProgress = (progress: number) => {
    setProgress(progress)
  }

  return (
    <>
      <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact setProgress={handleUpdateProgress} />
        <Footer />
      </div>
    </>
  )
}

export default App
