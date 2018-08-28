import React, { Component } from "react";
import "bulma/css/bulma.css";


class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = { qty: 1 };
   
  }
   
    agregarFood = () => {
    let food = this.props.food;
    let qty = this.state.qty;
    this.props.elclick(food,qty,true)
    this.setState({
      qty: 0
    });
    console.log('estas en click de foodbox')
  }

    restaFood =() => {
      let food = this.props.food;
      let qty = this.state.qty;
      this.props.elclick(food,qty,false)
      this.setState({
        qty: 0
      });
    }

  handleChange = (event) => {
    let valor = event.target.value
    this.setState({ qty: valor});
    console.log('estas en handlechange')
    
  };
  
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
             
              <img src={this.props.food.image} alt = "imagencomida"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                 placeholder="0"
                  className="input"
                  type="number" 
                  value={this.state.qty}
                  onChange={(event) => {this.handleChange(event)}}           
                />
              </div>
              <div className="control">
                <button
                className="button is-info"  
                onClick={this.agregarFood}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );

  }
}

export default FoodBox;
