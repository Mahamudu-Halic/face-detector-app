import './App.css'
import SignInContainer from './components/sign-in-container/sign-in-container.component';
import Navbar from './components/navbar/navbar.component';
import Logo from './components/logo/logo.component';
import Rank from './components/rank/rank.component';
import ImageLinkForm from './components/image-link-form/image-link-form.component';
import FaceRecognition from './components/face-recognition/face-recognition.component';
import { useState } from 'react';
import RegisterContainer from './components/register-container/register-container.component';
const App = () => {

  const [ user, setUser ] = useState({
    id: '',
    name: "",
    email: "",
    entries: 0,
    joined: ''
  })
  
  const [entries, setEntries ] = useState(user.entries)

  const loadUser = (info) => {
    setUser({
      id: info.id,
      name: info.name,
      email: info.email,
      entries: setEntries(info.entries),
      joined: info.joined
    })
  }

  const updateEntries = () => {
    fetch("http://localhost:3000/image", {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: user.id
      })
    })
    .then(response => response.json())
    .then(data => {
      setEntries(data[0].entries)
    })
  }
  const [input, setInput] = useState('')
  const [ imageUrl, setImageUrl ] = useState('')
  const [ route, setRoute ] = useState('signin')
  const [ isSignedIn, setIsSignedIn ] = useState(false)

  const onInputChange = ((event) => (
    setInput(event.target.value)
  ))

  const onSubmit = () => {
    setImageUrl(input)
    updateEntries()
  }

  const onRouteChange = (newRoute) => {
    if(newRoute === 'home'){
      setIsSignedIn(true)
    }
    else{
      setIsSignedIn(false)
    }
    setRoute(newRoute)
  }

  return (
    <div>
      <Navbar onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
      
      { route === 'home'
      ?
      <div>
          <Logo />
          <Rank user={user} entries={entries}/>
          <ImageLinkForm 
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            updateEntries={updateEntries}
          />
          <FaceRecognition 
            imageUrl={imageUrl}
          />
        </div>
      : (
          route === 'signin'
          ?
          <div>
            <SignInContainer 
              onRouteChange={onRouteChange}
              loadUser={loadUser}
            />
          </div>
          : 
          <div>
            <RegisterContainer 
              onRouteChange={onRouteChange}
              loadUser={loadUser}
            />
          </div>
        )
      }
    </div>
  )
}

export default App;
