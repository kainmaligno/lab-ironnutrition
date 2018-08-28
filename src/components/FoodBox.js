import React, { Component } from "react";
import "bulma/css/bulma.css";


class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = { eventCount: 1 };
   
  }
   
  handleClick = () => {
    let food = this.props.food;
    let qty = this.state.eventCount
    this.props.elclick(food,qty)
    console.log('estas en click de foodbox')
  }
 
  handleChange = (event) => {
    let valor = event.target.value
    this.setState({ eventCount: valor});
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
                  value={this.state.eventCount}
                  onChange={(event) => {this.handleChange(event)}}           
                />
              </div>
              <div className="control">
                <button
                className="button is-info"  
                onClick={this.handleClick}
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
