const demo = () => {
  const style1 = {
    color:'white',
    backgroundColor:'royalblue'
  }

   const style2 = {
    color:'yellow',
    backgroundColor:'#333'
  }

  return (
    <div style={3<2 ? style1 : style2}>demo</div>
  )
}

export default demo