import './sign-in.styles.css'
import { useState } from 'react'

const SignIn = ({onRouteChange, loadUser}) => {
    
    const [ signInEmail, setSigninEmail ] = useState('')
    const [ signInPassword, setSignInPassword ] = useState('')

    const onEmailChange = (event) => {
        setSigninEmail(event.target.value)
    }
    const onPasswordChange = (event) => {
        setSignInPassword(event.target.value)
    }
    
    const onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data[0].id){
                loadUser(data[0])
                onRouteChange('home')
            }
        })
    }

    const formList = [
        {
            id: 'email',
            name: 'Email',
            type: 'email',
            minLength: '0',
            onChangeHandler: onEmailChange
        },
        {
            id: 'password',
            name: 'Password',
            type: 'password',
            minLength: '5',
            onChangeHandler: onPasswordChange
        }
    ]


    return(
        <div className='form'>
            {
                formList.map(({id, name, type, minLength, onChangeHandler}) => (
                        <div className='form-group' key={id}>
                            <label>{name}</label>
                            <input 
                                type={type} 
                                name={name} 
                                id={id} 
                                minLength={minLength} 
                                required
                                onChange={onChangeHandler}
                            />
                        </div>
                    )
                )
            }
            <button 
                // onClick={() => onRouteChange('home')} 
                type='submit' 
                className='submit'
                onClick={onSubmitSignIn}
                >Sign In</button>
            <button onClick={() => onRouteChange('register')} className='register'>Register</button>
        </div>
    )
}

export default SignIn