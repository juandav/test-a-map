import React from 'react'
import './styless.css'

const styless = {
  p: {
    margin: "-2.5% 0",
  },
  divisorLine: {
    height: "60px",
  }
}

function MenuMapItem (props) {
  const { itemColor, iconPath, title, value, doClick } = props
  return (
    <div className={`item ${itemColor}`}>
      <img src={iconPath} className="item-map" alt="OM" width="80" height="80" />
      <div className="vertical-line" style={styless.divisorLine}></div>
      <div className="item-description">
          <p style={styless.p}>Region Geografica</p>
          <p style={styless.p}> <b>{title}</b> </p>
          <a href="#" onClick={(e) => { e.preventDefault(); return doClick(itemColor); }}>Detalles</a>
      </div>
      <div className={`circle ${itemColor}`}>{value}</div>
    </div>
  )
}

export default MenuMapItem