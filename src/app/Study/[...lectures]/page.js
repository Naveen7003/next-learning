"use client"
import React from 'react'

const page = ({params}) => {
    console.log(params)
  return (
    <div>
        <h1>{params.lectures[0]}</h1>
        <h1>{params.lectures[1]}</h1>
    </div>
  )
}

export default page