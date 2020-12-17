import React, { Component } from 'react'

export default class Searchbar extends Component {
  constructor() {
    super()

    this.state = {
      term: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  

  onFormSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input 
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({term: e.currentTarget.value })} />
          </div>
        </form>
      </div>
    )
  }
}
