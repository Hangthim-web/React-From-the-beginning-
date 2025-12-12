import {useState} from 'react';

const ProductFilter=()=>
{
    const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000 },
    { id: 2, name: "Shirt", category: "Clothing", price: 1200 },
    { id: 3, name: "Mobile", category: "Electronics", price: 30000 },
    { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
    { id: 5, name: "Rice Cooker", category: "Home Appliances", price: 4500 },
  ];

  const categories = ["Electronics", "Clothing", "Home Appliances"];

  const [selectedCategories,setSelectedCategories] = useState([])
  const [minPrice,setMinPrice] = useState("");
  const [maxPrice,setMaxPrice] = useState("");

  const handleCategoryChange=(e)=>
  {
   const {value,checked} = e.target;
   if(checked)
   {
    setSelectedCategories([...selectedCategories,value])
   }
   else{
     setSelectedCategories(selectedCategories.filter((cat)=>cat!==value))
   }
  }

  const filteredProducts = products.filter((product)=>
    {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
        const priceMatch = (minPrice === "" || product.price >= Number(minPrice)) && (maxPrice==="" || product.price <= Number(maxPrice));

        return categoryMatch && priceMatch;
    })

    return (
        <>
        <h2>Product Filter with category checkboxes and price ranges.</h2>
        {/* Category Checkboxes */}
        <h3>Filter By Category</h3>
        {categories.map((cat,index)=>
        (
        <div key={index}>
          <input
            type="checkbox"
            value={cat}
            checked={selectedCategories.includes(cat)}
            onChange={handleCategoryChange}
          />
          {cat}
        </div>
        ))}

        {/* Price ranges */}
        <h3>Filter by Price :</h3>
        <div>
            <label htmlFor="">Min Price:</label>
            <input 
            type="number" 
            name="minPrice"
            value={minPrice}
            id="minPrice" 
            onChange={(e)=>setMinPrice(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Max Price:</label>
            <input 
            type="number"
            name="maxPrice"
            id="maxPrice"
            value={maxPrice}
            onChange={(e)=>setMaxPrice(e.target.value)} />
        </div>
        {/* product List */}
        <h3>Products</h3>
        {
           filteredProducts.length==0 ? (<p>No products found.</p>) : (
            <ul>
                {/* {filteredProducts.map((product)=>
                (
                    <li key={product.id}
                    
                    {product.name} - Rs {product.price}({product.category})
                    ></li>
                ))} */}
                {filteredProducts.map((product) => (
                <li key={product.id}>
                {product.name} - Rs. {product.price} ({product.category})
                </li>
            ))}
            </ul>
           )
        }
        </>
    )
}


export default ProductFilter;