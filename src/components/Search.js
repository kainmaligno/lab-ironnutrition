import React, {Component} from 'react';
import 'bulma/css/bulma.css';

class Search extends Component {
    constructor(props){
        super(props);
        this.state ={search:''}
        this.handleOnchange=this.handleOnchange.bind(this);
    }
    handleOnchange(e){
        
       this.setState({search: e.target.value})
       this.props.getInputValue(this.state.search);
    }
    render(){
        return(
            <div className="field has-addons">
                <div className="control">
                    <input value={this.state.search} className="input" onChange={this.handleOnchange}  type="text" placeholder="Find your Food"/>
  </div>
                    <div className="control">
                        <a className="button is-info">
                            Search
    </a>
                    </div>
                </div>
        )
    }
}

export default Search;