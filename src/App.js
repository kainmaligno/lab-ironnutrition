import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.js";
import FoodBox from "./components/FoodBox";
import "./index.css";
import Search from "./components/Search";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      eventCount: 0
    };
  }


  getInputValue = search => {
    this.setState({ search });
    if (search !== "") {
      this.nuevoArreglo = foods.filter(food => {
        return (
          food.name
            .toLocaleLowerCase()
            .indexOf(search.toLocaleLowerCase()) >= 0
        );
      });
    }else {
      this.nuevoArreglo=foods;
    }
  };
  nuevoArreglo = [];
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
        <Search getInputValue={this.getInputValue} />
        {this.nuevoArreglo.length === 0
          ? foods.map(food => {
              return <FoodBox {...food} />;
            })
          : this.nuevoArreglo.map(food => {
              return <FoodBox {...food} />;
            })}

        {/* {foods.map((food) => {return <FoodBox {...food}/>})} */}
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
