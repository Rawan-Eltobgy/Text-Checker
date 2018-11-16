import React, { Component } from 'react';
import './App.css';
import Validation from './Component/Validation';
import Char from './Component/Char';

class App extends Component {
  state = {
    userInput: ''
  }
  inputChangeHandler = (event) => {
      this.setState({userInput: event.target.value})
  }
  charDeletionHandler = (index) =>{
    const tempText = this.state.userInput.split('');
    tempText.splice(index,1);
    //converting it back to a string
    const newText = tempText.join('');
    this.setState({userInput: newText});
  }
  render() {
    //To convert a string to an array and map it.
    const charList = this.state.userInput.split('').map((char, index )=>{
      return <Char key = {index} currentChar ={char} clicked = {this.charDeletionHandler.bind(this)}/>;
    });
    return (
      <div className="App">
       <input type = "text"
       name = "userInput"
       value = {
         this.state.userInput
       }
       onChange={this.inputChangeHandler}
       />
       <p>{this.state.userInput}</p>
       <Validation userInputLength={this.state.userInput.length}/>
       {charList}
      </div>
    );
  }
}

export default App;
