import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="text-3xl"><h1>Welcome to homepage</h1>
    <Link href="/fetchapi">Go to api page</Link></div>
    
  )
}

export default page