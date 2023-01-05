import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Customers() {
  const [customers, setCustomers] = useState([])
  
  useEffect(()=>{
    axios.get('https://northwind.vercel.app/api/customers').then((res)=>{setCustomers(res.data)})
  },[])
  console.log(customers)

  return (
    <div>Customers</div>
  )
}

export default Customers