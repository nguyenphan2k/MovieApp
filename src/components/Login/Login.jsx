import React, {useState} from 'react'
import axios from 'axios'

function Login() {
  const [formData, setFormData] = useState({
    email:"",
    password: "",
  })
  const {email, password} = formData
  function onChange(e){
    e.preventDefault()
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  return (
    <div >
      <h1 className='text-3xl text-center font-bold mt-6'>Login</h1>
      <div className='mb-12 mt-5 flex items-center justify-center'>
        <form className='w-full lg:w-[50%]'>
          <input
            type="email"
            className='w-full px-4 py-2 outline-none border-b-[1px] border-black
            text-sm bg-white rounded transition ease-in-out text-gray-400 mb-6'
            placeholder='Enter name'
            id='email'
            value={email}
            onChange={onchange}
          />
          <input
            type="password"
            className='w-full px-4 py-2 outline-none border-b-[1px] border-black
            text-sm bg-white rounded transition ease-in-out text-gray-400'
            placeholder='Enter name'
            id='password'
            value={password}
            onChange={onchange}
          />
        </form>
      </div>
    </div>
  )
}

export default Login