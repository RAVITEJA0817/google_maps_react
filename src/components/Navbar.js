import react from "react"
import Logo from './Logo.png'
import {FiHome} from 'react-icons/fi'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import "../App.css"

const Navbar = ({show}) => {
return(
    <div className={show ? 'sidenav active' : 'sidenav'}>
        <img src={Logo} alt='Logo' className='logo' ></img>
        <ul>
            <li><a href ="/">{<FiHome />}Home</a></li>
            <li><a href ="/"> {<AiOutlineInfoCircle />}About</a></li>
            <li><a href ="/"> {<BsFillPersonFill />}Contact</a></li>
        </ul>
    </div>
)
}
export default Navbar;