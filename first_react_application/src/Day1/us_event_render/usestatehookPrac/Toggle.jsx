import { useState } from 'react'

const Toggle=()=>{
    
    const [black,setBlack] = useState(false)
    const toggle=()=>
    {
        setBlack(black=>!black)
        document.body.style.backgroundColor = !black?'black':'white';
    }
return (
    <button onClick={toggle}>Toggle</button>
)
}


export default Toggle