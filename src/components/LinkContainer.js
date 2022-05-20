import React from 'react'
// import Table from './Table';
import Table from './Table'
// import Form from './Form';
import Form from './Form'

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    /* TODO - Create state object for storing favLinks */

  this.state= {favLinks: [] , }

  }

  handleRemove = (index) => {
    /*
            TO DO - Create logic for setting the state to filter array and remove favLink at index
        */
       const filterArr = this.state.favLinks
       filterArr.splice(index, 1); 
       this.setState ({ favLinks : filterArr})    
  }

  handleSubmit = (favLink) => {
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */

            this.setState({favLinks: [this.state.favLinks, favLink]})
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
     <Table linkData= {this.state.favLinks} removeLink= {(index) => this.removeCharacter(index)} />
        <br />

        <h3>Add New</h3>
        {/*TODO - Add Form Component */}
        <Form newLink= {(favLink) => this.handleSubmit(favLink)}/>
      </div>
    )
  }
}

export default LinkContainer
