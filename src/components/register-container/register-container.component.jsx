import Register from "../register/register.component"
const RegisterContainer = ({onRouteChange, loadUser}) => {
    return(
        <div className='form-container'>
            <h1 className='title'>Register</h1>
            <Register 
                onRouteChange={onRouteChange}
                loadUser={loadUser}
            />
        </div>
    )
}

export default RegisterContainer