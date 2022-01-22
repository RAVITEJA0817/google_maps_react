import react from "react"
import reactDom from "react-dom"
import "../App.css"
import {FaRegCopyright} from "react-icons/fa"

function Footer(){
    const presentYear = new Date().getFullYear();
    return(
        <footer>{<FaRegCopyright />}copyright{presentYear}</footer>
    )
}
export default Footer;