//import React from "react"
import PropTypes from "prop-types"
import "./Dialog.scss";

const Dialog = ({ children }) => {
  //if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        {children}
      </div>
    </div>
  )
}

Dialog.propTypes = {
  children: PropTypes.node,
}

export default Dialog;
