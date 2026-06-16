import { useState } from "react"

const Condition = () => {
  const [isLogin,setLogin] = useState(false)
  
  return (
    // <div>
    //     <h1>SBS online classes</h1>
    //     {
    //         isLogin && 3>2 &&
    //         <div>
    //         <p>Hello satya</p>
    //         <button>logout</button>
    //         </div>
    //     }

    //     {/* <button>login</button> */}
    // </div>

    <div>
        <h1>Sri B.S Classes</h1>
        {isLogin ?
        <div>
            <h3>Hello satya</h3>
            <button onClick={()=>{setLogin(false)}}>logout</button>
        </div> :
        <button onClick={()=>{setLogin(true)}}>login</button>
        }
    </div>
  )
}

export default Condition