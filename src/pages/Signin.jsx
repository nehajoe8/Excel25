import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
    
  }

  return (
    <div className="min-h-screen bg-[#0d0b13] flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 rounded-3xl shadow-xl backdrop-blur-md bg-white/5 border border-white/10 text-white">
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide font-[Orbitron] text-[#f0ebff]">
          Sign In to Shastra
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-[#cfc9e8] mb-1 font-[Orbitron]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-[#1a1723] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#d4c4ff]"
            />
          </div>
          <div>
            <label className="block text-sm text-[#cfc9e8] mb-1 font-[Orbitron]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-[#1a1723] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#d4c4ff]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#c9b6ff] hover:bg-[#bfa9f8] text-[#0d0b13] font-semibold py-2 rounded-lg transition duration-300 font-[Orbitron]"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-[#aaa5cb] font-[Orbitron]">
          Don’t have an account? <Link to={'/signup'} className="underline cursor-pointer">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Signin
