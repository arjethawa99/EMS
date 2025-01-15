import React from 'react'
import Login from './Component/Auth/Login'
import EmpolyeeDashboard from './Component/Dashboard/EmpolyeeDashboard'
import AdminDashboard from './Component/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUSer] = useState(null);
  const AuthData = useContext(AuthContext);
  const [useDataLoggedIn, setuseDataLoggedIn] = useState(null)
  // const { employeeData, AdminData } = AuthData;
  // console.log(AuthData);
  useEffect(() => {
    const loggedInUSer = localStorage.getItem('loggedInUSer')
    if (loggedInUSer) {
      const roleFind = JSON.parse(loggedInUSer)
      setUSer(roleFind.role);
      setuseDataLoggedIn(roleFind.data)
    }
  }, [])



  const handlerLogin = (email, password) => {
    if (AuthData && AuthData.AdminData.find((e) => e.email == email && e.password == password)) {//(email == "admin@example.com" && password == "123") {
      setUSer("admin");
      localStorage.setItem('loggedInUSer', JSON.stringify({ role: "admin", data: AuthData.AdminData }))
      setuseDataLoggedIn(AuthData.AdminData);
    } else if (AuthData && AuthData.employeeData.find((e) => e.email == email && e.password == password)) {//(email == "john.doe@example.com" && password == "123") {
      const employee = AuthData.employeeData.find((e) => e.email == email && e.password == password);
      if (employee) {
        setUSer("employee");
        setuseDataLoggedIn(employee);
        localStorage.setItem('loggedInUSer', JSON.stringify({ role: "employee", data: employee }))
      }

    } else {
      alert("Invalid Credential Again Email:- " + email)
    }
  }

  return (
    <>
      {!user ? <Login handlerLogin={handlerLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUSer= {setUSer} data={useDataLoggedIn} /> : user == "employee" ? <EmpolyeeDashboard changeUSer= {setUSer} data={useDataLoggedIn} /> : '' }
      {/* <EmpolyeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App