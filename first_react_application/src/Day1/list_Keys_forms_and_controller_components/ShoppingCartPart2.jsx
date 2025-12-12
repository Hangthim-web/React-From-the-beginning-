import { useState } from 'react';

const ShoppingCartPart2=()=>
{
    const [item,setItem] = useState("")
    const [quantity,setQuantity] = useState('')
    const [cart,setCartItems] = useState([])
    const addToCart=()=>{
        console.log(cart);
       if (!item || !quantity) return ;
       setCartItems((prev)=>
    {
        const exists = prev.find((p) => p.name == item)
        if(exists){
            return prev.map((p)=>
            p.name === item ? {...p,quantity:p.quantity+Number(quantity)}:p)

        }
        return [...prev,{name:item,quantity:Number(quantity)}]

    })
    setItem('');
    setQuantity('');
    }
    const removeItem=(index)=>
    {
        setCartItems((prev)=>prev.filter((_,i)=>i!=index));
    }
    return (
        <>
        <h2>CART ITEMS </h2>
        <div>
            <label htmlFor="">Item</label>
            <input 
            type="text" 
            name="shopping_item"
            id="shopping_item" 
            value={item}
            onChange={(e)=>setItem(e.target.value)} 
             />
        </div>
        <div>
            <label htmlFor="">Quantity</label>
            <input 
            type="text"
             name="shopping_quantity" 
             id="shopping_quantity" 
             value={quantity}
             onChange={(e)=>setQuantity(e.target.value)}
             />
        </div>
        <br />
        <button onClick={addToCart}>Add To Cart</button>
        <div>
            <h2>Cart Item List</h2>
            {cart.length==0 && <span>No cart items</span>}
            <ul>
                {cart.map((value,index)=>(
                    <li key={index}>
                        {value.name} - {value.quantity}
                        <button onClick={(e)=>removeItem(index)}>Remove Item</button>
                    </li>
                ))}
            </ul>
        </div>
        </> 
    )
}

export default ShoppingCartPart2