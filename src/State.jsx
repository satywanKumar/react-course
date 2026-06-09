const State = () => {
  var fullName = "satya"

  const changeName = ()=>{
    fullName = "aman"
  }

  return (
    <div>
        <h1>{fullName}</h1>
        <button onClick={changeName}>Change fullName</button>
        <button onClick={()=>{console.log(fullName)}}>Show Current fullName</button>
    </div>
  )
}

export default State