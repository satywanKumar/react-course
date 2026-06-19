import axios from "axios"
import { useEffect, useState } from "react"
import loader from './assets/loader.gif'

const ContactList = () => {
  console.log("pura function dubara chala")
  const [fullName,setFullName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [gender,setGender] = useState('Female')
  const [address,setAddress] = useState('')
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
  const [editingState,setEditingState] = useState(false)
  const [contactId,setId] = useState('')

  useEffect(() => {
    getContact()
  }, [])

  const getContact = () => {
    setLoading(true)
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

  const submitHandler = ()=>{
    const newContact = {
      name:fullName,
      email:email,
      phone:phone,
      gender:gender,
      address:address
    }
    console.log(newContact)
    if(editingState)
    {
      axios.put('https://sbs-contact.onrender.com/api/contacts/'+contactId,newContact)
      .then(res=>{
        setEditingState(false)
        console.log(res)
        resetForm()
        getContact()
      })
      .catch(err=>{
        console.log(err)
      })
    }
    else
    {
      axios.post('https://sbs-contact.onrender.com/api/contacts',newContact)
      .then(res=>{
        console.log(res)
        resetForm()
        getContact()
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }

  const resetForm = ()=>{
    setFullName("")
    setEmail("")
    setGender("Male")
    setAddress("")
    setPhone("")
  }

  const editHandler = (data)=>{
    setEditingState(true)
    console.log(data)
    setFullName(data.name)
    setEmail(data.email)
    setPhone(data.phone)
    setAddress(data.address)
    setGender(data.gender)
    setId(data._id)
  }



  return (
    <>
      <h1>Add Contact</h1>
      <form>
        <input value={fullName} onChange={(e)=>{setFullName(e.target.value)}} placeholder="full name" />
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
        <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="phone"/>
          <select value={gender} onChange={(e)=>{setGender(e.target.value)}}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        <input value={address} onChange={(e)=>{setAddress(e.target.value)}} type="text" placeholder="address" />
        <button type="button" onClick={submitHandler}>{editingState ? 'edit contact': 'add contact'}</button>
        {editingState && <button type="button" onClick={()=>{
          resetForm()
          setEditingState(false)
        }}>cancel</button>}
      </form>
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
                <th>Edit</th>
                <th>Delete</th>
                
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
                      <button onClick={()=>{editHandler(data)}} type="button">Edit</button>
                    </td>
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