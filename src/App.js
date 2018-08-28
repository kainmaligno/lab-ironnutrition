import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.js";
import FoodBox from "./components/FoodBox";
import "./index.css";
import Search from "./components/Search";
import "bulma/css/bulma.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      todayFoods: []
    };
  }

  handleClick = (food, qty) => {
    let todayFoods = this.state.todayFoods.slice();
    todayFoods.push({ ...food,qty});
     this.setState({
       todayFoods: [food,qty]
     });
    
  console.log("estas en handleclick", todayFoods)
  return todayFoods
  }

  displayFoods = (search) => {
    search = search.toUpperCase();
    let result = [];
    for (let i = 0; i < foods.length; i++) {
      if (foods[i].name.toUpperCase().indexOf(search) !== -1) {
        result.push(
          <FoodBox key={i} food={foods[i]} elclick={this.handleClick} />
        )
      }
    }
    return result;
  }

  dislplaySelectedFoods() {
    let result = [];
    for (let i = 0; i < this.state.todayFoods.lenght; i++) {
      result.push(
        <li key={i}>
          {this.state.todayFoods[i].qty} {this.state.todayFoods[i].name} ={" "}
          {this.state.todayFoods[i].qty * this.state.todayFoods[i].calories} cal
        </li>
      );
    }
    console.log('paso por selected',result)
    return result;
  }

  displaySelectedFoodsCalories() {
    let result = 0;
    for (let i = 0; i < this.state.todayFoods.lenght; i++) {
      result +=
        this.state.todayFoods[i].qty * this.state.todayFoods[i].calories;
    }
    console.log('paso por calorias',result)
    return result;
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
        <Search search={this.state.search} onChange={(e) => {this.setState({search: e.target.value})}} />
        {/* <Search getInputValue={this.getInputValue} /> */}
        <div className="columns">
          <div className="column">
          {this.displayFoods(this.state.search)}
            
          </div>
          <div className="column content">
            <h1>Today's Food</h1>
            <ul>{this.dislplaySelectedFoods()}</ul>
            <small>Total Calories: {this.displaySelectedFoodsCalories()}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//  {/* {foods.map((food) => {
//           return <FoodBox name={food.name} calories={food.calories} image={food.image}/>
//         })} */}
//         {/* version oldschool */}
//         {foods.map((food) => {
//           return <FoodBox {...food}/>
//         })}
//         {/* new 52 tierra 616  */}
