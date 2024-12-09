import { Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import CustomerRegistration from "./pages/customerRegistration/CustomerRegistration"
import { useState } from "react"

const App = () => {
  const [userType, setUserType] = useState(() => {
    return localStorage.getItem("userType") || null
  })

  return (
    <Routes>
      <Route path="/" element={<Login setUserType={setUserType} />} />
      <Route
        path="/home"
        element={<Home userType={userType} setUserType={setUserType} />}
      />
      <Route
        path="/customer-registration"
        element={<CustomerRegistration userType={userType} />}
      />
    </Routes>
  )
}

export default App
