"use client"
import {React, useState, useEffect} from 'react'
import axios from 'axios'

const page = () => {
    const [data, setdata] = useState([])
    const Fetchdata = async() =>{
        const apidata = await axios.get("https://jsonplaceholder.typicode.com/comments");
        setdata(apidata.data)
        console.log(apidata)
    }
    useEffect(() =>{
        Fetchdata()
    },[data])
  return (
    <div>
        <h1>all the emails are:-</h1>
        {
            data.map((r,i) => (
                <h1 key={i}>{r.email}</h1>
            ))
        }
    </div>
  )
}

export default page