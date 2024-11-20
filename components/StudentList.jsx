import axios from 'axios'
import React, { useEffect, useState } from 'react'

function StudentList({students,onDeleteStudents,onEditStudents}) {
    const [editid,setEditid]=useState(null)
    const [editStudent,setEditStudent]=useState({name:'',age:'',email:''})
    const onHandleeditclick=(student)=>{
        setEditid(student.id)
        setEditStudent({name:student.name,age:student.age,email:student.email})

    }
    const handleSave=()=>{
        onEditStudents(editid,editStudent)
        setEditid(null)
    }
    const handlecancel=()=>{
        setEditStudent({name:'',age:'',email:''})
        setEditid(null)
    }
    
  return (
    <div>
        <h2>Student List</h2>
        <ul>
            {students.map(student=>(
                <li key={student.id}> 
                {editid==student.id ? (
                    <div><input type='text' value={editStudent.name} onChange={(e)=>setEditStudent({...editStudent,name:e.target.value})}></input>
                    <input type='number' value={editStudent.age} onChange={(e)=>setEditStudent({...editStudent,age:e.target.value})}></input>
                    <input type='email' value={editStudent.email} onChange={(e)=>setEditStudent({...editStudent,email:e.target.value})}></input>
                    <button onClick={handleSave}>save</button>
                    <button onClick={handlecancel}>cancel</button>
                    </div>
                ):(
               
                <div>
                     {student.name} {student.age} {student.email}
                    <button onClick={()=>onDeleteStudents(student.id)}>delete</button>
                    <button onClick={()=>onHandleeditclick(student)}>Edit</button>
                </div>
               ) }
                </li>
            ))}
        </ul>
    </div>
  )
  }

export default StudentList