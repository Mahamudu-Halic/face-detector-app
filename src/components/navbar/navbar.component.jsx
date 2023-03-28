import './navbar.styles.css'


const Navbar = ({onRouteChange, isSignedIn}) => {
    const links = [
        {
            id: 1,
            title: 'Sign In',
            link: '#',
            route: () => onRouteChange('signin')
        },
        {
            id: 2,
            title: 'Register',
            link: '#',
            route: () => onRouteChange('register')
        }
    ]
    
    const loggedIn = [
        {
            id: 1,
            title: 'Sign Out',
            link: '#',
            route: () => onRouteChange('signin')
        }
    ]
    if(isSignedIn){
        return(
            <nav className="navbar">
            <ul className="nav-list">
                <li><a onClick={() => onRouteChange('signin')} href='#'>Sign Out</a></li>
            </ul>
        </nav>
        )
    }
    else{
        return(
            <nav className="navbar">
                <ul className="nav-list">
                    {
                        links.map(({id, title, link, route}) => (
                            <li key={id}><a onClick={route} href={link}>{title}</a></li>
                        ))
                    }
                </ul>
            </nav>
        )
    }
}

export default Navbar;