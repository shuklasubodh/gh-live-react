import Welcome from "./components/Welcome"
import Navbar from "./components/Navbar"
import './App.css'
import { BrowserRouter ,Link,Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      {/* <nav>
        <Link to="/gh-live-react/">Welcome</Link> | 
        <Link to="/gh-live-react/home">Home</Link> | 
        <Link to="/gh-live-react/about">About</Link> | 
        <Link to="/gh-live-react/contact">Contact</Link> | 
      </nav> */}
      <Routes>

      <Route path="/gh-live-react/"  element={<Welcome />} />
      <Route path="/gh-live-react/home"  element={<Home />} />
      <Route path="/gh-live-react/about" element={<About />} />
      <Route path="/gh-live-react/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App