import { useState } from 'react'
import loader from './assets/loader.gif'
const StudentList = () => {
    
  const [isLoading,setLoading] = useState(false)

  return (
    <div style={{height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        {/* {isLoading && <img style={{height:'200px'}} src={loader} alt="loader" />} */}
       {!isLoading && <button onClick={()=>{setLoading(true)}}>show loading</button>}
       {isLoading ?
        // <img style={{height:'200px'}} src={loader} alt="loader" />
        // <img style={{height:'200px'}} src="https://assets-v2.lottiefiles.com/a/d5392796-1169-11ee-908e-b33ed8d96ca4/kW0SJwvz27.gif" alt="loader" />
        <img src="loader2.gif" alt="loader" />
        :
        <div>
            <h1>satywan kumar</h1>
            <p>satya@gmail.com</p>
        </div>
        }
    </div>
  )
}

export default StudentList