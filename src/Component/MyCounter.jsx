import {useState} from "react";

const MyCounter = (props) => {
    let [countState, setCountState] = useState(77);
    
    function incCount() {
        setCountState(countState + props.incBy)
    }

    return (
        <div>
            <div>{countState}</div>
            <button onClick={incCount}>+{props.incBy}</button>
        </div>
    )
}

export default MyCounter;