import axios from 'axios'
import React, { useState } from 'react'

function Studentform({onAdd}) {
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [email,setEmail]=useState('')
    
    const Handlesubmit=async(e)=>{
        e.preventDefault()
        const studentData={name,age,email}
        try{
            const response=await axios.post('http://127.0.0.1:8000/student/create',studentData)
            console.log(response.data)
            onAdd(studentData)
            setName('')
            setAge('')
            setEmail('')
        }
        catch (error){
          console.error('error',error)

        }
        
    }
  return (
    <div>
        <h1> Add student</h1>
        <form onSubmit={Handlesubmit}>
         <label>name</label>
         <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
         <label>age</label>
         <input type='number' value={age} onChange={(e)=>setAge(e.target.value)}></input>
         <label>email</label>
         <input type='email'value={email} onChange={(e)=>setEmail(e.target.value)}></input>
         <button type='submit'>Add Student</button>
        </form>
    </div>
  )
}

export default Studentform