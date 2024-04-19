import image from '../assets/photo.png'
import { MdEmail } from "react-icons/md"
function Info(){
    return(
        <div>
            <img src={image} alt="Laura photo" className='info-img' />
            <h1 className='info-name'>Frozan Ziaee</h1>
            <p className='info-fronted'>Frontend Developer</p>
            <p className='info-website'>frozanziaee.website</p>
            <button className='btn-email'><a href='frozanziaie234@gmail.com' className='email-link'><span><MdEmail /></span> Email</a></button>
        </div>
    )
}

export default Info