import React, {Component} from 'react'
import { connect, } from 'react-redux'
import MenuMapItem from '../MenuMapItem'
import MenuMapModal from '../MenuMapModal'
import { randomKey } from '../../utils/keys'
import { fetchRaces } from '../../store/reducers/races/actions'
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

/*function clickAction(color) {
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
}*/

class MenuMapContainer extends Component {
  doClick = (color) => {
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
    const location = { "first": 6, "second": 3, "third": 1, "fourth": 4, "fifth": 5, }
    this.props.fetchAllRaces(location[color])
  }
  render () {
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        ...this.props,
        doClick: this.doClick,
        races: this.props.races,
      })
    })
  }
}

const MenuMapStateContainer = connect( ({ races }) => {
  return { races }
}, (dispath) => {
  return {
    fetchAllRaces: payload => dispath(fetchRaces(payload))
  }
})(MenuMapContainer)

function MenuMap (props) {
  const MenuItems = data.map(el => (
    <MenuMapItem key={randomKey()} {...el} />
  ))
  return (
    <div className="content">
      <h4 className="content-title">
        Selecciona una región para detallar el porcentaje de tu composición ancestral.
      </h4>
      <MenuMapStateContainer> 
        { MenuItems }
        <MenuMapModal 
          country="America"
        />
      </MenuMapStateContainer> 
    </div>
  )
}


export default MenuMap