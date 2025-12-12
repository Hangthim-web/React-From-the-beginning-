import { useState } from 'react';

const FormWithValidation=()=>
{
    const [errors,setErrors] = useState({})
    const [form,setForm] = useState({
        username : "",
        email : "",
        password : "",
        confirm_password : "",
    })
    const handleChange=(e)=>
    {
       setForm({...form,[e.target.name] : e.target.value})
    }

    const validate=()=>
    {
        const newErrors = {};
        if (!form.username.trim())
        {
            newErrors.username = "Username is required !";
        }
        if (!form.email.trim()) {
        newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        newErrors.email = "Enter a valid email";
        }
        if (!form.password) {
            newErrors.password = "Password is required";
            } else if (form.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
            }
        if (form.confirm_password !== form.password) {
        newErrors.confirm_password = "Passwords do not match";
        }
        return newErrors;
    }

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        const validationError = validate()
        setErrors(validationError)

        if(Object.keys(validationError).length===0)
        {
            alert("registration successful")
            console.log(form)


            setForm({
            username:"",
            email :"",
            password: "",
            confirm_password: ""
            });
        }

    }

    return (
        <>
        <h2>Registration Form</h2>
         <form onSubmit={handleSubmit}>
           {/* username */}
           <div>
            <label htmlFor="">Username</label>
            <input 
            type="text"
             name="username" 
             id="username"
             value={form.username}
             onChange={handleChange}
              />
            {errors.username && <p style={{color:'red'}}>{ errors.username }</p>}
           </div>
           
           {/* email */}
           <div>
            <label htmlFor="">Email</label>
            <input
            type="email"
             name="email"
             id="email"
             value={form.email}
             onChange={handleChange}
              />
             {errors.email && <p style={{color:'red'}}>{ errors.email }</p>}
           </div>
           <div>
            <label htmlFor="">Password</label>
            <input 
            type="password" 
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            />
            {errors.password && <p style={{color:'red'}}>{ errors.password }</p>}

           </div>
           <div>
            <label htmlFor="">Confirm Password</label>
            <input 
            type="password" 
            name="confirm_password"
            id="confirm_password" 
            value={form.confirm_password}
            onChange={handleChange}
            
            />
            {errors.confirm_password && <p style={{color:'red'}}>{ errors.confirm_password }</p>}
           </div>
           <button type='submit'>Register</button>
         </form>
        
        </>
    )
}

export default FormWithValidation;