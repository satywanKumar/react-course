import { useState } from "react"

const Value = () => {
    const [value, setValue] = useState(0);

    const inc = () => {
        // console.log('hello')
        var d = value
        d += 1
        setValue(d)

    }

    const dec = () => {
        var d = value
        d -= 1
        setValue(d)
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
        </div>
    )
}

export default Value