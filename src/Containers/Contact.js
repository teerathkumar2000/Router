import React from 'react';
import { Link } from "react-router-dom";

export default class Contact extends React.Component{
render(){
    console.log(this.props.match)
    return(
        <div>
           <h2> Contact</h2>
           <Link to="/">Go Home</Link>

        </div>
    )
}
}