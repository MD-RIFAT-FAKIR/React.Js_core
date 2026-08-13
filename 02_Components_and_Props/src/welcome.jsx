//child components

const Welcome = ({name, age, isPassword}) => {
    
    return (
        <>
            <div>
                <h1>{name}</h1>
                <h2>{age}</h2>
                <h3>{isPassword}</h3>
            </div>
        </>
    )
}

export default Welcome