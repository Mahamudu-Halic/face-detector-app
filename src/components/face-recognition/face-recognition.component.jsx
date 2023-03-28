import './face-recognition.styles.css'

const FaceRecognition = ({imageUrl}) => {
    return(
        <div>
            <div className='image'>
                <img alt='' src={imageUrl} />
            </div>
        </div>
    )
}

export default FaceRecognition