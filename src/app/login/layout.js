"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const layout = ({children}) => {
  const pathname = usePathname();
  return (
    <div className="flex justify-center gap-10 bg-blue-300">
      { pathname !== "/login/studentlogin" ? 
      <ul>
        <Link href="/login/studentlogin">studentlogin</Link>
        <Link href="/login/teacherlogin">teacherlogin</Link>
      </ul>: <h1>layout is not allowed for student</h1>}
      
    {children}
    </div>
  )
}

export default layout