import React, { useState } from 'react'

const Login = ({handleLogIn}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Hello Guyzz !!!! Form submitted")
        console.log("Email is- ",email)
        console.log("Password is-",password)
        handleLogIn(email, password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
            onSubmit={(e) => {submitHandler(e)}} 
            className='flex flex-col items-center justify-center'>
                <input
                onChange={(e) => {setEmail(e.target.value)}}
                value={email}
                 required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder: text-grey-400' type='email' placeholder='Enter your email'/>
                <input 
                onChange={(e) => {setPassword(e.target.value)}}
                value={password}
                required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 mt-3 px-5 rounded-full placeholder: text-grey-400' type='password' placeholder='Enter password'/>
                <button className='mt-5 text-white outline-none  border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder: text-white'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login