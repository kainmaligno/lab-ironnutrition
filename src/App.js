import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.js';
import FoodBox from './components/FoodBox';
import './index.css';
import Search from './components/Search';
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      search:''
    }
  }
  getInputValue=(search)=> {  
   this.setState({search})
   console.log(this.state.search)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Search getInputValue={this.getInputValue}></Search>
        {/* {foods.map((food) => {
          return <FoodBox name={food.name} calories={food.calories} image={food.image}/>
        })} */} 
        {/* version oldschool */}
        {foods.map((food) => {
          return <FoodBox {...food}/>
        })}
        {/* new 52 tierra 616  */}
      </div>
    );
  }
}

export default App;
