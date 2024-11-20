import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Studentform from '../components/Studentform'
import StudentList from '../components/StudentList'
import axios from 'axios'

function App() {
 
  const [students,setStudents]=useState([])
  

  const fetchstudents=async()=>{
      try{
          const response=await axios.get('http://127.0.0.1:8000/students/')
          // console.log(response.data)
         setStudents(response.data)
      }
      catch(error){
          console.error('error',error)
      }
  }
  const onAdd=(newStudent)=>{
    setStudents([...students,newStudent])
  }

  const deleteStudent=async (id)=>{
    try{
      const response=await axios.delete(`http://127.0.0.1:8000/student/${id}/delete`)
      if (response.status==204)
        setStudents((students=>
          students.filter((student=>{student.id !==id}))
       ))
      
    }
    catch(error){
      console.error('error delete students',error)
    }
   }
   const editStudent=async(id,updateStudent)=>
   {
    try{
      const response=await axios.put(`http://127.0.0.1:8000/student/${id}/update`,updateStudent)
      if (response.status==200)
        setStudents((students=>
          students.map((student=>student.id==id ? {...student,...updateStudent}:student))
       ))
    }
    catch(error){
      console.error('error update students',error)
    }
  
   }
  useEffect(()=>{
    fetchstudents()
  },[])



  return (
    <>
      <div>
        <Studentform onAdd={onAdd}></Studentform>
        <StudentList students={students} onDeleteStudents={deleteStudent} onEditStudents={editStudent}></StudentList>
      </div>
    </>
  )
}

export default App