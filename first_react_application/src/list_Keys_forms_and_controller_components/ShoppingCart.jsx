import { useState } from 'react'

const ShoppingCart = () => {
    const [item, setItem] = useState('')
    const [quantity, setQuantity] = useState("")
    const [items, setItems] = useState([])

    const addToCart = () => {
        if (!item || !quantity) return;

        setItems((prev) => {
            const exists = prev.find((p) => p.name === item)

            if (exists) {
                return prev.map((p) =>
                    p.name === item ? { ...p, quantity: p.quantity + Number(quantity) } : p
                )
            }

            return [...prev, { name: item, quantity: Number(quantity) }];
        })

        setItem('');
        setQuantity('');
    }

    const removeItems = (name) => {
        setItems((prev) => prev.filter((p) => p.name !== name))
    }

    return (
        <div>
            <h1>This is the shopping list</h1>

            <div>
                <label>Item</label>
                <input 
                    type="text"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />
            </div>

            <div>
                <label>Quantity</label>
                <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>

            <button onClick={addToCart}>Add To Cart</button>

            <div>
                <h3>Cart Items</h3>
                {items.length === 0 && <h4>No Items</h4>}

                <ul>
                    {items.map((value, index) => (
                        <li key={index}>
                            {value.name} - {value.quantity}
                            <button onClick={() => removeItems(value.name)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ShoppingCart
