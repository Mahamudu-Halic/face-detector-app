import './image-link-form.styles.css'

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return (
        <div className='image-link'>
            <p className='f3'>
                {`This Magic Brain will detect faces in your pictures. Give it a try.`}
            </p>

            <div id='form'>
                <input type='text' onChange={onInputChange}/>
                <button type="submit" onClick={onSubmit}>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm