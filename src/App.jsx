import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import { data } from 'autoprefixer'


const App = () => {
  
  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInuserData] = useState(null);

  const [userData, setUserData] = useContext(AuthContext)



  

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInuserData(userData.data )

      // console.log("User Login Hai")
    }
    
  }, [])
  

  const handleLogIn = (email, password) => {
    if(email == "admin@me.com" && password == 123) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }
    else if(userData ) {
      const employee = userData.find((e) => e.email == email && e.password == password)
      if(employee) {
        setUser('employee')
        setLoggedInuserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
      }
      
    } 
    else {
      alert("Invalid")
    }
  }

  


  return (
    <>
    {!user ? <Login handleLogIn ={handleLogIn}/> : ''}
    {user === 'admin' ? ( <AdminDashboard changeUser={setUser} /> ) : user === 'employee' ? ( <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/>) : null}

    
    {/* <Login /> */}

    {/* <EmployeeDashboard /> */}

    {/* <AdminDashboard /> */}
    
    </>
  )
}

export default App