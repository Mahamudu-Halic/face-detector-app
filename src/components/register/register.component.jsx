import React from "react"
import { useState } from "react"

const Register = ({onRouteChange, loadUser}) => {

    const [ userName, setUserName ] = useState('')
    const [ userEmail, setUserEmail ] = useState('')
    const [ userPassword, setUserPassword ] = useState('')
    
    const onNameChange = (event) => {
        setUserName(event.target.value)
    }
    const onEmailChange = (event) => {
        setUserEmail(event.target.value)
    }
    const onPasswordChange = (event) => {
        setUserPassword(event.target.value)
    }
    
    const onRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: userName,
                email: userEmail,
                password: userPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id){
                loadUser(data)
                onRouteChange('home')
            }
        })
    }
    
    const formList = [
        {
            id: 'name',
            name: 'Name',
            type: 'text',
            minLength: '0',
            onChangeHandler: onNameChange
        },
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
        <div className="form">
            {
                formList.map(({id, name, type, minLength, onChangeHandler}) => (
                        <div 
                            className='form-group' 
                            key={id}
                            >
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
                onClick={onRegister} 
                className='submit'
                >Register</button>
            <button onClick={() => onRouteChange('signin')} className='register'>Sign In</button>
        </div>
    )
}

export default Register