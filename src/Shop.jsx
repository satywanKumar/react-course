const Shop = (d) => {
//   console.log(d)
  return (
    <div>
        <h1>{d.data.shopName}</h1>
        <p>{d.data.contact}</p>
        {d.children[1]}
    </div>
  )
}

export default Shop