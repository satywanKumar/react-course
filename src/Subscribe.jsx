import { useState } from "react"

const Subscribe = () => {

    const [isSubscribe, setSubscribe] = useState(true)

    const subscribeHandler = () => {
        setSubscribe(!isSubscribe)
    }

    const subscribe = {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '10px'
    }

    const unsubscribe = {
        backgroundColor: '#eee',
        color: 'black',
        border: 'none',
        padding: '10px'
    }

    return (
        <div>
            <h1>SBS Online Classes</h1>
            <button onClick={() => {
                setSubscribe(!isSubscribe)
            }} style={isSubscribe ? unsubscribe : subscribe}>{isSubscribe ? 'Unsubscribe' : 'Subscribe'}</button>
        </div>
    )
}

export default Subscribe