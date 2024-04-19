import { FaTwitterSquare } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"

function Footer (){
    return (
        <footer>
            <a href="#" className="social-link">
            <FaTwitterSquare />
            </a>

            <a href="https://www.facebook.com/aisha.hareer.5?mibextid=ZbWKwL" target="_blank"  className="social-link">
            <FaFacebookSquare />
            </a>

            <a href="https://www.instagram.com/aisha_hareer?igsh=MTRtZno2bXMwNjJtcg%3D%3D&utm_source=qr" target="_blank"  className="social-link">
            <FaInstagramSquare />
            </a>

            <a href="https://www.linkedin.com/in/frozan-ziaie-1609702a8" target="_blank"  className="social-link">
            <FaLinkedin />
            </a>

            <a href="https://github.com/Frozanziaee" target="_blank"  className="social-link">
            <FaGithubSquare />
            </a>
        </footer>
    )
}

export default Footer