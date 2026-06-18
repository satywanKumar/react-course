import { useState } from "react"

const Input = () => {
  const [fullName,setName] = useState('')
  const [gender,setGender] = useState()
  return (
    <div>
        <select onChange={(e)=>{setGender(e.target.value)}}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        {/* <input value={fullName} onChange={(e)=>{setName(e.target.value)}} type="text" /> */}
        <button onClick={()=>{console.log(gender)}}>show value</button>

    </div>
  )
}

export default Input