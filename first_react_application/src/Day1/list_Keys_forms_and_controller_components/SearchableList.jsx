import { useState } from 'react'

const SearchableList=()=>
{
    const [search,setSearch] = useState("")
    const items = [
        "Apple",
        "Banana",
        "Orange",
        "Papaya",
        "Grapes",
        "Mango",
        "Pineapple"
    ]
    const filteredItems = items.filter((item)=>
    item.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <>
        <label htmlFor="">Search For Items:</label>
        <input
        type="text"
        placeholder="Search for Items"
        name="searchItem"
        id="searchItem"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <ul>
            {filteredItems.length>0?(filteredItems.map((item,index)=><li key={index}>{item}</li>)):(<p>No Items Found !</p>)
            }
        </ul>
        </>
    )
}

export default SearchableList;