import { useState } from 'react'

const Counter=()=>
{
    const [value,setValue] = useState(0)
     return (
        <>
        <h2>Value : {value}</h2>
        <div>
            <button onClick={()=>setValue(value-1)}>Decrement</button>
            <button onClick={()=>setValue(0)}>Reset</button>
            <button onClick={()=>setValue(value+1)}>Increment</button>
        </div>
        </>
    )
}
export default Counter;