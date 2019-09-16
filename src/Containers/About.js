import React from 'react';
import { Link } from "react-router-dom";

export default class About extends React.Component{

render(){
    console.log(this.props.location.state)
    return(
        <div>
           <h2> About</h2>
           {/* <Link to="/">Go Home</Link><br/><br/>
           <Link to="/contact">Go contact</Link><br/><br/> */}

           <button onClick={this.props.history.goBack}>Go Back </button>

        </div>
    )
}
}