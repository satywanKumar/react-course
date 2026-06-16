const Array = () => {
  const data = [
    {
      id:1,
      name:'satya',
      email:'satya@gmail.com'
    },
    {
      id:2,
      name:'aman',
      email:'aman@gmail.com'
    },
    {
      id:3,
      name:'roshan',
      email:'roshan@gmail.com'
    },
    {
      id:1,
      name:'abhi',
      email:'aa@gmail.com'
    }

  ]

  return (
    <div>
      <h1>Student List</h1>
      {
        data.map((student)=>(
          <div id={student.id}>
            <h1>{student.name}</h1>
            <p>{student.email}</p>
          </div>

        ))
      }
    </div>
  )
}

export default Array