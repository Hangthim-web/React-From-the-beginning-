import { useState } from "react";

const Project=()=>
    {
    const [todos,setTodos] = useState([]);
    const [item,setItem] = useState("");
    const [editingId,setEditingId] = useState(null);
    const [editingText,setEditingText] = useState("");
    const addTask=()=>
    {
        if (item.trim() === "") return ;
        
        const todo_item = {
                id : Date.now(),
                text : item,
             }
            setTodos([...todos,todo_item])
            setItem("");
            // console.log("add task")
    }
    const deleteItem = (id)=>{
        setTodos((prevTodo) => prevTodo.filter((todo)=>todo.id !=id ))
    }

    const toggleTodo = (id) => {
    setTodos(
    todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
    };

    const startEdit=(todo)=>{
        setEditingId(todo.id);
        setEditingText(todo.text);
    }

    const saveEdit=()=>
    {
        if(!editingText.trim()) return; 
        setTodos(
            todos.map((t)=>(t.id === editingId? {...t,text:editingText}:t))
          
        );
        setEditingId(null);
        setEditingText("");

        
    }




    return (
        <>
        <div>
            <input
            type="text" 
            name="" 
            id=""
            value={item}
            onChange={(e)=>setItem(e.target.value)}
            placeholder="Enter the task" />
            <button onClick={addTask}>Add Task</button>

        </div>
        <div>
            {todos.length === 0 && <h4><strong>No task yet !</strong></h4>}
            <ul>
                {
                    todos.map((todos)=>(
                        <li key={todos.id}>
                        {editingId === todos.id ?
                         (
                            <input
                            
                            value={editingText}
                            onBlur={saveEdit}
                            autoFocus
                            onChange={(e)=>setEditingText(e.target.value)}
                               onKeyDown={(e)=>
                            {
                                if (e.key === "Enter") saveEdit();
                                if(e.key === "Escape"){
                                    setEditingId(null);
                                    setEditingText("");
                                }
                            }}
                            />
                         ) :
                          (
                            <span
                        onClick={() => toggleTodo(todos.id)}
                        className={`flex-1 cursor-pointer ${
                        todos.done ? "line-through text-gray-400" : ""
                        }`}
                        >
                        {todos.text}
                        {editingId === WebTransportBidirectionalStream.id
                        ?
                        (<button onClick={()=>saveEdit()}>Save</button>)
                        :
                        (<button onClick={()=>startEdit(todos)}>Edit</button>)
                    }
                        </span>
                          )}
                        <button onClick={()=>deleteItem(todos.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
        </>
    )
    }

export default Project;

// import { useState } from "react";

// function Project() {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");

//   const addTodo = () => {
//     if (!text.trim()) return;
//     setTodos([...todos, { id: Date.now(), text, done: false }]);
//     setText("");
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((t) => t.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

//         <div className="flex gap-2 mb-4">
//           <input
//             className="flex-1 border p-2 rounded-xl"
//             placeholder="Add a task..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//           <button
//             onClick={addTodo}
//             className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow"
//           >
//             Add
//           </button>
//         </div>

//         <ul className="space-y-2">
//           {todos.map((todo) => (
//             <li
//               key={todo.id}
//               className="flex items-center justify-between bg-gray-50 p-3 rounded-xl shadow"
//             >
//               <span
//                 onClick={() => toggleTodo(todo.id)}
//                 className={`flex-1 cursor-pointer ${
//                   todo.done ? "line-through text-gray-400" : ""
//                 }`}
//               >
//                 {todo.text}
//               </span>
//               <button
//                 onClick={() => deleteTodo(todo.id)}
//                 className="ml-3 text-red-500 font-bold"
//               >
//                 X
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Project;
