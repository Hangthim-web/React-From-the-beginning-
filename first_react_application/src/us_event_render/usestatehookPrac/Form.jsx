import { useState } from "react";


const Form=()=>
{
    const [first_name,setFirstName] = useState("")
    const [last_name,setLastName] = useState("")
    const [email,setEmail] = useState("")
    return (
        <div>
             <form action="">
                <div>
                    <label htmlFor="">First Name:</label>
                    <input type="text" name="first_name" id="first_name"  onChange={(e)=>setFirstName(e.target.value)} value={first_name}/>
                </div>
                <div>
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="last_name" id="last_name" onChange={(e)=>setLastName(e.target.value)} value={last_name}/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} id="email" value={email}/>
                </div>
                <button>Submit</button>
             </form>

             <hr />
             <h3>Form Data:</h3>
             <p><strong>First Name</strong>{first_name}</p>
             <p><strong>Last Name</strong>{last_name}</p>
             <p><strong>Email</strong>{email}</p>



        </div>
    )
}

export default Form;