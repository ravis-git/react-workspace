import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './HeaderComponent.css'

class HeaderComponent extends React.Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <h1> RxDev - Reactive Developer </h1>
          <p> Leverage Business Opportunities ... Fast </p>
        </Jumbotron>
      </div>
    )
  }
}

export default HeaderComponent
