import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../api/backendApi"
// import "../styles/auth.css"

function Login(){

  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = async (e) => {

    e.preventDefault()

    try{

      const res = await api.post("/api//auth/login",{
        email,
        password
      })

      localStorage.setItem("token",res.data.token)

      navigate("/")

    }catch(err){
      alert("Invalid credentials")
    }

  }

  return(

    <div className="auth-page">

      <form className="auth-card" onSubmit={handleLogin}>

        <h2>Login</h2>

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
          Login
        </button>

        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Register</Link>
        </p>

      </form>

    </div>

  )

}

export default Login