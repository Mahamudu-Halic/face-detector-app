import './navigation.styles.css'
const Navigation = ({onRouteChange}) => {
    return (
        <nav>
            <a onClick={() => onRouteChange('signin')} href='#'>Sign Out</a>
        </nav>
    )
}

export default Navigation