
const Product = (props) => {
  console.log(props)
  const {name,price} = props.data
  return (
    // <div className="productCard">
    //     <h1>{props.pName}</h1>
    //     <p>Price:- {props.price}</p>
    //     <p>RAM :- 16 GB</p>
    // </div>

    // <div className="productCard">
    //     <h1>{props.data.name}</h1>
    //     <p>Price:- {props.data.price}</p>
    //     <p>RAM :- 16 GB</p>
    // </div>

    <div className="productCard">
        <h1>{name}</h1>
        <p>Price:- {price}</p>
        <p>RAM :- 16 GB</p>
    </div>
  )
}

export default Product