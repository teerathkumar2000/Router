import React from 'react';
import { Link } from "react-router-dom";
import Button from './button'
export default class Home extends React.Component{


  
    goAbout(){
        this.props.history.push("/About")
    }
    goContact(){
        this.props.history.push("/Contact")
    }
  
render(){
    console.log(this.props)
    return(
        <div>
            
            <h2>Home</h2>
            <Button history = {this.props.history} obj = {{name : 'kamal' , class : '12'}}/>
            {/* <Link to="/About">Go About</Link><br/><br/>
            <Link to="/Contact">Go Contact</Link><br/><br/> */}
            {/* <button onClick={this.goAbout.bind(this)}>Go About </button><br/><br/> */}
            <button onClick={this.goContact.bind(this)}>Go Contact </button>

             

        </div>
    )
}
}