import * as React from "react"
import { Link } from "gatsby"


export default function Navbar() {
  return (
    <nav>
      <h1>jasonbalayev.dev</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  )
}