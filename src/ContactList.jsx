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
  const [contactList,setContactList] = useState([])
  const [isLoading,setLoading] = useState(true)

  useEffect(()=>{
    getContact()
  },[])

  const getContact = ()=>{
    axios.get('https://sbs-contact.onrender.com/api/contacts')
    .then(res=>{
        setLoading(false)
        console.log(res.data.data)
        setContactList(res.data.data)
    })
    .catch(err=>{
        console.log(err)
    })
  }

  return (
    <>
    {isLoading ?
    <img src={loader} alt="loader"/> 
    :
    <div>
    <h1>Contact List</h1>
       {
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
       }
    </div>
    }
    </>
  )
}

export default ContactList