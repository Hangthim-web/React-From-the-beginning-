import { useState } from 'react'

const SurveyForm=()=>
{
    const [form,setForm] = useState({
        satisfaction:"",
        interests : [],
        feedback : "",
    })

    const [errors,setErrors] = useState({});

    const handleChange=(e)=>
    {
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleCheckbox = (e)=>
    {
        const {value,checked} = e.target;
        if(checked){
            setForm({...form,interests:[...form.interests,value]})
        }
        else{
            setForm({
                ...form,
                interests:form.interests.filter((item)=>item!=value),
            })
        }
    };

    const validate=()=>
    {
        const newErrors={};
        if(!form.satisfaction) newErrors.satisfaction = "Please Select an option";
        if(form.interests.length===0)
            newErrors.interests="Select at least one interest";
        if(form.feedback.trim().length<10)
            newErrors.feedback="Feedback must be atleast 10 characters long";

        return newErrors;
    }


    const handleSubmit=(e)=>
    {
        e.preventDefault();
        const validationError = validate();
        setErrors(validationError);
        if(Object.keys(validationError).length===0)
        {
            alert("Survey Submitted!");
            console.log(form);

            setForm({
                satisfaction:"",
                interests :[],
                feedback:"",
            })
        }
    }


    return (
        <>
            <h2>Survey Form</h2>
            <form action="" onSubmit={handleSubmit}>
                {/* Radio Buttons */}
                <div>
                    <label htmlFor=""><strong>How satisfied are you?</strong></label>
                    <div>
            <input
              type="radio"
              name="satisfaction"
              value="Very Satisfied"
              checked={form.satisfaction === "Very Satisfied"}
              onChange={handleChange}
            /> 
            Very Satisfied
          </div>

          <div>
            <input
              type="radio"
              name="satisfaction"
              value="Satisfied"
              checked={form.satisfaction === "Satisfied"}
              onChange={handleChange}
            /> 
            Satisfied
          </div>

          <div>
            <input
              type="radio"
              name="satisfaction"
              value="Neutral"
              checked={form.satisfaction === "Neutral"}
              onChange={handleChange}
            /> 
            Neutral
          </div>
          {errors.satisfaction && (<p style={{color:'red'}}>{errors.satisfaction}</p>)}
        </div>
        <hr />

         {/* Checkboxes */}
        <div>
          <label><strong>Select your interests:</strong></label>

          <div>
            <input
              type="checkbox"
              value="Sports"
              checked={form.interests.includes("Sports")}
              onChange={handleCheckbox}
            /> 
            Sports
          </div>

          <div>
            <input
              type="checkbox"
              value="Music"
              checked={form.interests.includes("Music")}
              onChange={handleCheckbox}
            /> 
            Music
          </div>

          <div>
            <input
              type="checkbox"
              value="Travel"
              checked={form.interests.includes("Travel")}
              onChange={handleCheckbox}
            /> 
            Travel
          </div>

          {errors.interests && (
            <p style={{ color: "red" }}>{errors.interests}</p>
          )}
        </div>

        <hr />


         <div>
          <label><strong>Your feedback:</strong></label>
          <textarea
            name="feedback"
            rows="4"
            style={{ width: "100%" }}
            value={form.feedback}
            onChange={handleChange}
          ></textarea>

          {errors.feedback && (
            <p style={{ color: "red" }}>{errors.feedback}</p>
          )}
        </div>
        
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit Survey
        </button>

            </form>
        </>
    )
}

export default SurveyForm;