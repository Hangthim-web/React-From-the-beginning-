import { useState } from 'react';

const EditableTodoList=()=>
{
    const [todos,setTodos] = useState([]);
    const [item,setItem] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editingText,setEditingText] = useState("");


    const handleAdd=()=>
    {
         if(item.trim() ==="") return;

         const newItem = {
            id: Date.now(),
            text:item
         }

         setTodos([...todos,newItem])
         setItem("")

    }
    const deleteTask=(id)=>
    {
        setTodos(todos.filter((todo)=>todo.id != id));
    }
    const startEditing=(id,text)=>{
        setEditingId(id);
        setEditingText(text);
    }

    const saveEdit=()=>
    {
        if (editingText.trim() === "") return; 
        setTodos(
            todos.map((todo)=>
            todo.id === editingId ? {...todo,text:editingText}:todo
            )
        );

        setEditingId(null);
        setEditingText("");
    }
  
    return (
        <>
        <h1>Editable Todo List</h1>
        <div>
            <div>
                <input 
                type="text"
                name=""
                id="" 
                value={item}
                onChange={(e)=>setItem(e.target.value)}
                onKeyDown={(e)=>e.key==="Enter" && handleAdd()}
                />
                <button onClick={handleAdd}>Add Item</button>
            </div>
            
            <div>
                {todos.length ===0 && <p>No Todo list Found !</p>}
            </div>
            <ul>
                {todos.map((todo)=>
                (
                    <li key={todo.id}>
                        {editingId === todo.id?(
                            <input
                            type="text"
                            value={editingText}
                            autoFocus
                            onChange={(e)=>setEditingText(e.target.value)}
                            onBlur={saveEdit}
                            onKeyDown={(e)=>
                            {
                                if (e.key === "Enter") saveEdit();
                                if(e.key === "Escape"){
                                    setEditingId(null);
                                    setEditingText("");
                                }
                            }
                            }
                            
                            />
                        )
                        :
                        (
                            <span onClick={()=>startEditing(todo.id,todo.text)}>
                                {todo.text}
                            </span>
                        )}
                        <button onClick={()=>deleteTask(todo.id)}>
                            Delete Task
                        </button>
                    </li>
                ))}
            </ul>
                
            
        </div>
        </>
    )
}

export default EditableTodoList;