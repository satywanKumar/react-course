const Student3 = () => {
  const mc1 = {
    color:'green',
    backgroundColor:'yellow'
  }

  const mc2 = {
    fontSize:'52px'
  }

  return (
    <div>
        {/* <h1 className="myclass2 myclass1">hello students</h1> */}
        <h1 style={{...mc1,...mc2,fontFamily:'cursive'}} >sbs online classes</h1>
    </div>
  )
}

export default Student3