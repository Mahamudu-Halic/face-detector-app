import './logo.styles.css'
import brain from './brain.png'
import Tilt from 'react-tilt'
const Logo = () => {
    return(
        <div className='logo mar mt0'>
            <Tilt className='Tilt  br2 shadow-2' option={{max : 20}} style={{ height: 100, width: 100 }} >
                <div className='Tilt-inner'><img src={brain} alt='image of a brain'/></div>
            </Tilt>
        </div>
    )
}

export default Logo