const Student = ()=>{
    const studentCard = {
       width:'30%',
       height:'200px',
       boxShadow:'5px 5px 10px #333',
       display:'flex',
       flexDirection:'column',
       justifyContent:'center',
       alignItems:'center'
    }
    return (
        <div style={studentCard}>
            <h1>Satywan Kumar</h1>
            <p className="greet">Email: satya@gmail.com</p>
        </div>
    )
}

export default Student;