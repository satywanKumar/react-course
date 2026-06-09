const Child = (props) => {
  console.log(props)
//   props.receiver(5)
  return (
    <div>
        <button onClick={()=>{props.receiver(25)}}>pass data</button>
    </div>
  )
}

export default Child