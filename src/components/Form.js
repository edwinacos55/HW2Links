import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    /*
            TODO - set initial state for link name and URL 
        */
       this.setState = {linkName: '', url: ''}

       
       
  }

  handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
       if(event.target.id === "link")
       this.setState({linkname: event.target.value})
       this.setState({url: event.target.value})
  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
            let newLink = {linkname: this.state.linkName, url: this.state.url}
            this.setState({ linkName: '', url: ''})
            this.props.addNew(newLink)
  }

  render() {
    return (
      <form>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
        <label for="link">Link Name: </label>
        <input type="text" id="link" onChange={(event) =>this.handleChange(event)}/>
        <label for="url">URL: </label>
        <input type="text" id="url" onChange={(event) =>this.handleChange(event)}/>
        <button type="submit" onClick={() => this.onFormSubmit()}>Submit</button>
      </form>
    )
  }
}

export default Form
