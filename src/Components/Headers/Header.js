import React from 'react'
import { Link } from 'react-router-dom'
import Signup from '../Form'
export default function Header() {
  return (
    <div>
    <Signup/>
      <Link to='/'> Home</Link>

    </div>
  )
}
