import React, { Component } from 'react'
import 'd3'
import 'topojson'
import * as Datamaps from 'datamaps'

const styles = {
  map: {
    position: 'relative', 
    width: '500px', 
    height: '300px'
  }
}

class Map extends Component {
  constructor (props) {
    super(props)
    try {
      this.mapRef = null
    } catch (error) {
      console.error(`Map ${error.message}`)
    }
  }
  componentDidMount () {
    new Datamaps({
      element: this.mapRef,
      scope: 'world'
    })
  }
  render () {
    return ( <div ref={ $selector => this.mapRef = $selector } style={ styles.map }></div> )
  }
}

export default Map