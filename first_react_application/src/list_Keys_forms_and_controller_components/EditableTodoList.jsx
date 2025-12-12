import { useState } from 'react';


const EditableTodoList=()=>
{
    const [item,setItem] = useState([])
    return (
        <>
        <h1>Editable Todo List</h1>
        <div>
            <input
             type="text"
              name="addItem"
               id="addItem"
               value={item}
               />
               
        </div>
        </>
    )
}


export default EditableTodoList;