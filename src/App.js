import React, { Component } from 'react';
import EditorOne from './editor/Editor';
import { Button, DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 'Parties - 1'};
    this.itChanged = this.itChanged.bind(this);
  }

  itChanged(event) {
    this.setState(() =>{value: event.target.value});
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Term Sheet - {this.state.value}</h1>
          </header>

          <div className="App-second-header">
            <select className="input" onChange={this.itChanged}>
              <option value="Parties - 1">Parties</option>
              <option value="Parties - 2">Investment</option>
            </select>
            <Button bsStyle="success" className="add-button">Add Clause</Button>
          </div>
          
          <hr style={{marginTop: '0px'}}/>


        </div>


        <div>
          <EditorOne />
        </div>
        
      </div>
    );
  }
}

export default App;
