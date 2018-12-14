import React from 'react'
import MenuMapItem from '../MenuMapItem'
import './styless.css'

function MenuMap (props) {
  return (
    <div className="content">
      <h4 className="content-title">
        Selecciona una región para detallar el porcentaje de tu composición ancestral.
      </h4>
      <MenuMapItem 
        itemColor="first"
        iconPath="/img/america.png"
        title="America"
        value="20%"
      />
      <br />
      <MenuMapItem 
        itemColor="second"
        iconPath="/img/europe.png"
        title="Europe"
        value="20%"
      />
      <br />
      <MenuMapItem 
        itemColor="third"
        iconPath="/img/africa.png"
        title="Africa"
        value="20%"
      />
      <br />
      <MenuMapItem 
        itemColor="fourth"
        iconPath="/img/asia.png"
        title="Asia"
        value="20%"
      />
      <br />
      <MenuMapItem 
        itemColor="fifth"
        iconPath="/img/australia(nomap).png"
        title="Oceania"
        value="20%"
      />
    </div>
  )
}

export default MenuMap