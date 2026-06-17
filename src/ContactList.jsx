import axios from "axios"
import { useEffect, useState } from "react"
import loader from './assets/loader.gif'

const ContactList = () => {
  console.log("pura function dubara chala")
  //   const [value,setvalue] = useState(0)

  //   const inc = ()=>{
  //     const d = value + 1
  //     setvalue(d)
  //   }

  //   const dec = ()=>{
  //     const d = value - 1
  //     setvalue(d)
  //   }
  const [contactList, setContactList] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getContact()
  }, [])

  const getContact = () => {
    axios.get('https://sbs-contact.onrender.com/api/contacts')
      .then(res => {
        setLoading(false)
        console.log(res.data.data)
        setContactList(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteContactById = (id) => {
    if (window.confirm("Are you sure?")) {
      setLoading(true)
      axios.delete('https://sbs-contact.onrender.com/api/contacts/' + id)
        .then((res) => {
          setLoading(false)
          console.log(res)
          console.log('data delete ho gya')
          getContact()
        })
        .catch((err) => {
          setLoading(false)
          console.log(err)
          console.log('nahi huwa delete...')
        })
    }
  }

  return (
    <>
      {isLoading ?
        <img src={loader} alt="loader" />
        :
        <div>
          <h1>Contact List</h1>
          {/* {
        contactList.map((d)=>(
            <div key={d._id}>
                <h2>{d.name}</h2>
                <p>Email :- {d.email}</p>
                <p>Phone :- {d.phone}</p>
                <p>Address :- {d.address}</p>
                <p>Gender :- {d.gender}</p>
                <hr/>
            </div>
        ))
       } */}
          {
            contactList.length>0 ?
            <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                contactList.map((data) => (
                  <tr key={data._id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.gender}</td>
                    <td>{data.address}</td>
                    <td>
                      <button onClick={() => { deleteContactById(data._id) }} style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          :
          <p>No contact data is available</p>
          }

        </div>
      }
    </>
  )
}

export default ContactList