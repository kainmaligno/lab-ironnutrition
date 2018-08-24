import React, {Component} from 'react';

import 'bulma/css/bulma.css';
class FoodBox extends Component{
  
    render(){
        
       return <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img  src={this.props.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.name}</strong> <br />
          <small>{this.props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value="1"
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>

// return <Card
// hoverable
// style={{ max_width: 240 }}
// cover={<img alt="example" src={this.props.image} />}
// >
// <Meta
//   title={this.props.name}
//   description={this.props.calories}
// />
// </Card>


    }
}

export default FoodBox;