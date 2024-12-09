import { useState } from "react"
import logo from "../../assets/logo.svg"
import Dialog from "../../components/Dialog"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Messages from "../../components/messages/Messages"
import "./Login.scss"

const mockData = [
  {
    login: "admin.admin@email.com",
    password: "admin"
  },
  {
    login: "user.teste@email.com",
    password: "teste"
  }
]

const Login = () => {
  const navigate = useNavigate()
  const [showAlert, setShowAlert] = useState(false)
  const [inputLogin, setInputLogin] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [message, setMessage] = useState(null)

  const handleLogin = () => {
    const user = mockData.find(
      (user) => user.login === inputLogin && user.password === inputPassword
    )

    const userType = inputPassword === "admin" ? "admin" : "salles"

    if (user) {
      setShowAlert(true)
      localStorage.setItem("userType", userType)
      setMessage({ success: true, message: "Login válido!" })
      setTimeout(() => navigate("/home"), 1000)
    } else {
      setShowAlert(true)
      setMessage({ success: false, message: "Login ou senha inválidos." })
    }
  }

  return (
    <div className="login-container">
      <Dialog>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="input-group">
          <label>Email</label>
          <Input
            type="email"
            value={inputLogin}
            placeholder="Digite seu email"
            onChange={(e) => setInputLogin(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Senha</label>
          <Input
            type="password"
            value={inputPassword}
            placeholder="Digite sua senha"
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </div>

        <Button
          className="btn"
          disabled={inputLogin === "" || inputPassword === ""}
          onClick={handleLogin}
        >
          Entrar
        </Button>
      </Dialog>
      {showAlert && (
        <Messages
          success={message.success}
          message={message.message}
          setShowAlert={setShowAlert}
        />
      )}
    </div>
  )
}

export default Login
