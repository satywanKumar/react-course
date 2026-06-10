import { useState } from "react"

const State = ()=>{
  // var fullName = "sri b.s classes"
  const [fullName,setFullName] = useState('sri bs classes')

  const changeHandler = ()=>{
    setFullName("sbs online classes")
  }
  return (
    <div>
      {console.log('UI load ho gya')}
      <h1>{fullName}</h1>
      <button onClick={changeHandler}>change name</button>
      <button onClick={()=>{console.log(fullName)}}>show name</button>
    </div>
  )
}

export default State