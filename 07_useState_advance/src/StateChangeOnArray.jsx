import { useState } from "react";

const StateChangeOnArray = ({number}) => {

    let [num, setElemtnt] = useState(number)

    const addelement = () => {//batch update
        setElemtnt(prev => (prev+1))
        setElemtnt(prev => (prev+1))
        setElemtnt(prev => (prev+1))
    }
    
    return (
        <div>
            <h1>{num}</h1>
            <div>
                <button onClick={addelement}>click here</button>
            </div>
        </div>
    )
}

export default StateChangeOnArray