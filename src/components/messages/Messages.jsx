import { useEffect } from "react"
import PropTypes from "prop-types"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import "./Messages.scss"

const Messages = ({ success, message, setShowAlert }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
  })

  return (
    <div className="alert-message">
      <Alert variant={!success ? "destructive" : ""}>
        <AlertTitle>{success ? "Sucesso" : "Error"}!</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  )
}

Messages.propTypes = {
  success: PropTypes.node,
  message: PropTypes.node,
  setShowAlert: PropTypes.node
}

export default Messages
