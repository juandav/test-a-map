import React from 'react'
import MapModalItem from '../MapModalItem'
import { randomKey } from '../../utils/keys'
import './styless.css'

const data = [
  {
    description: "Maya, Yucatan",
    value: "7.5%"
  },
  {
    description: "other",
    value: "7.5%"
  }
]

function doClick () {
  const colorKey = localStorage.getItem('colorKey')
  const diffItems = document.querySelectorAll(`.item:not(.${colorKey})`)
  const $subMenu = document.getElementsByClassName('frontMenu')
  for (var i in diffItems) {
    if(!isNaN(i)) { 
      diffItems[i].style.width = "300px"
      diffItems[i].children[1].hidden = false
      diffItems[i].children[2].hidden = false
      diffItems[i].children[3].hidden = false
      $subMenu[0].style.visibility = "hidden"
    }
  }
}

function MenuMapModal (props) {
  const { country } = props
  const listItems = data.map((el) =>
    <MapModalItem key={randomKey()} description={el.description} value={el.value} /> 
  )
  return (
    <div className="frontMenu">
      <p style={{ margin:"-2.5% 0", }}>Region Cartografica</p>
      <p style={{ margin:"-2.5% 0", }}><b>{country}</b></p>
      <a href="#" onClick={e => { e.preventDefault(); doClick() }}> X </a>
      <hr />
      <div className="scrollList">
        { listItems }
      </div>
    </div>
  )
}

export default MenuMapModal