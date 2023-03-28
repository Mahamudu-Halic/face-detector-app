import SignIn from '../sign-in/sign-in.component'
import './sign-in-container.styles.css'

const SignInContainer = ({onRouteChange, loadUser}) => {
    return(
        <div className='form-container'>
            <h1 className='title'>Sign In</h1>
            <SignIn 
                onRouteChange={onRouteChange}
                loadUser={loadUser}
            />
        </div>
    )
}

export default SignInContainer