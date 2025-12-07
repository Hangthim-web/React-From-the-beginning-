import {useState} from 'react'

const ShoppingList=()=>
{
    const [item,setItem] = useState("")
    const [list,setList] = useState([])

    const addItem=()=>
    {
        if (item.trim()=="") return ;
        setList([...list,item]);
        setItem("");
    }
    const removeItems=(index)=>
    {
        const updatedList = list.filter((_,i)=>i!=index)
        setList(updatedList)
    }
    return (
        <div>
            
                 <input type="text" name="item" id="shopping_item" value={item} onChange={(e)=>setItem(e.target.value)}/>
                <button onClick={addItem}>Add Item</button>
            
            <ul>
                {list.map((value,index)=>(
                    <li key={index}>
                        {value}
                        {/* <button onClick={removeItem(index)}>Remove</button> */}
                        <button onClick={() => removeItems(index)}>Remove Item</button>
                        </li>
                    
                ))}
            </ul>
        </div>
    )

}

export default ShoppingList