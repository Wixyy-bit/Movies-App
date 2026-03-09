import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../api/backendApi"
import "../styles/auth.css"

function Signup(){

  const navigate = useNavigate()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSignup = async (e)=>{

    e.preventDefault()

    await api.post("/auth/register",{
      name,
      email,
      password
    })

    navigate("/")

  }

  return(

    <div className="auth-page">

      <form className="auth-card" onSubmit={handleSignup}>

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">
          Register
        </button>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </form>

    </div>

  )

}

export default Signup