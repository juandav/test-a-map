import React from 'react'
import MenuMapItem from '../MenuMapItem'
import MenuMapModal from '../MenuMapModal'
import { randomKey } from '../../utils/keys'
import './styless.css'

const data = [
  {
    itemColor:"first",
    iconPath:"/img/america.png",
    title:"America",
    value:"20%",
  },
  {
    itemColor:"second",
    iconPath:"/img/europe.png",
    title:"Europe",
    value:"20%",
  },
  {
    itemColor:"third",
    iconPath:"/img/africa.png",
    title:"Africa",
    value:"20%",
  },
  {
    itemColor:"fourth",
    iconPath:"/img/asia.png",
    title:"Asia",
    value:"20%",
  },
  {
    itemColor:"fifth",
    iconPath:"/img/australia(nomap).png",
    title:"Oceania",
    value:"20%",
  }
]

function clickAction(color) {
  const diffItems = document.querySelectorAll(`.item:not(.${color})`)
  const $subMenu = document.getElementsByClassName('frontMenu')
  localStorage.setItem('colorKey', color)
  for (var i in diffItems) {
    if(!isNaN(i)) { 
      diffItems[i].style.width = "90px"
      diffItems[i].children[1].hidden = true
      diffItems[i].children[2].hidden = true
      diffItems[i].children[3].hidden = true
      $subMenu[0].style.visibility = "visible"
    }
  }
}

function MenuMap (props) {
  const MenuItems = data.map(el => (
    <MenuMapItem key={randomKey()} {...el} doClick={clickAction} />
  ))
  return (
    <div className="content">
      <h4 className="content-title">
        Selecciona una región para detallar el porcentaje de tu composición ancestral.
      </h4>
      { MenuItems }
      <MenuMapModal 
        country="America"
      />
    </div>
  )
}

export default MenuMap