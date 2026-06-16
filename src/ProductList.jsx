// import { useState } from "react"

import { useState } from "react"

// const ProductList = () => {
//   const [products,setProducts] = useState(['laptop','mouse','keyboard'])
  
//   return (
//     <div>
//         <h1>Product List</h1>
//         {
//             products.map((data,i)=>(
//                 <div key={i}>
//                     <p>{data}</p>
//                     <button onClick={()=>{setProducts(products.filter(d=>d != data))}}>delete</button>
//                 </div>
//             ))
           
//         }
//     </div>
//   )
// }

// export default ProductList

const ProductList = () => {
  const [product,setProduct] = useState([
    {id:1,name:'laptop',price:78000},
    {id:48,name:'mouse',price:500},
    {id:85,name:'keyboard',price:1200},
    {id:555,name:'laptop',price:78000},
  ])
  return (
    <div>
        <h1>Product Lits</h1>
        {
            product.map((data)=>(
                <div key={data.id}>
                    <h3>{data.name}</h3>
                    <p>{data.price}</p>
                    <button onClick={()=>{setProduct(product.filter(d=>d.name != data.name))}}>delete</button>
                    <hr/>
                </div>
            ))
        }
    </div>
  )
}

export default ProductList

