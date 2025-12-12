import {useState} from 'react'



const CharacterCount=()=>
{
    const [text,setText] = useState('')
    const maxchars = 280;



    return (
        <div>

        <h1>Char Count</h1>
        
       <textarea  
       value={text}
    //    onchange={handleChange}
       placeholder="Type Something..."
       maxlength={maxchars}
       onChange={(e)=>setText(e.target.value)}

       />
       <p>
        {text.length}/{maxchars} characters
       </p>
       {text.length > maxchars && (
        <p style={{ color: "red" }}>You have exceeded the character limit!</p>
       )}
       </div>
    )

}

export default CharacterCount;