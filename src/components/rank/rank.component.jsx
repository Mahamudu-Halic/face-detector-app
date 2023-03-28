import './rank.styles.css'

const Rank = (props) => {
    const {name} = props.user
    const {entries} = props
    return (
        <div className='rank'>
            <h1>{`${name} your current entry count is...`}</h1>
            <h1>#{entries}</h1>
        </div>
    )
}

export default Rank