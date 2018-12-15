import React from 'react'
import "./styless.css"

/**
 * 
 * @param {*} props { "description": "Maya, Yucatan", "value": "7.5.%" }
 */
function MapModalItem (props) {
  const { description, value } = props
  return (
    <div className="scrollList-raza">
      <p className="scrollList-raza-description"> { description } </p>
      <p className="scrollList-raza-value"> { value } </p>
    </div>
  )
}

export default MapModalItem