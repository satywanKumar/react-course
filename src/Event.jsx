const Event = () => {
  const loginHandler = (d)=>{
            console.log("login",d)
        }
  return (
    <div>
        <button onClick={()=>{loginHandler(54)}}>login</button>
    </div>
  )
}

export default Event