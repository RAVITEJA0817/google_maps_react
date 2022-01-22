import './App.css';
import { useState } from 'react'
import Navbar from "./components/Navbar"
import {GiHamburgerMenu} from 'react-icons/gi'
import {SiGooglemaps} from 'react-icons/si'
import {FiLogOut} from "react-icons/fi"
import{CgProfile} from "react-icons/cg"
import Footer from "./components/Footer"
import Main from "./components/main"
import reactDom from "react-dom"
function App() {
  const [showNav, setShowNav ] = useState(false)
  return (
    <div className='App' > 
    <header><GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
    <button className='btn'>{<FiLogOut />}Logout</button>
    <button className='btn2'> {<CgProfile />} Profile</button>
    <h1 className='heading1'>{<SiGooglemaps />}Maps</h1>
    </header>
    <Navbar show={showNav} />
    < Main />
    <Footer />
    </div>
    )
}
export default App;
