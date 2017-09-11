import React, { Component } from 'react'
import './CardsComponent.css'

class CardsComponent extends Component {

  render() {
    return (
      <div>
        <div class='oddcard'>
          <h3>This is Card 1</h3>
        </div>
        <div class='evencard'>
          <h3>This is Card 2</h3>
        </div>
      </div>
    )
  }
}

export default CardsComponent
