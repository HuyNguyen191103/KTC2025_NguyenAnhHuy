import React, { Component } from 'react'

export default class MyClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 2,
            name: "Tèo"
        }
    }
  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <p>Id: {this.state.id}</p>
        <p> Name: {this.state.name}</p>
        <button onClick={()=> this.setState({id: 2, name:"Huy"})}> Update Name </button>
      </div>
    )
  }
}
