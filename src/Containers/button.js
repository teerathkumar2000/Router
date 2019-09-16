import React from 'react';
export default class Button extends React.Component{
    goAbout(){
        console.log(this.props)
        this.props.history.push('./about',this.props.obj)
    }
render(){
    console.log(this.props)
    return(
        <div>
            
            <button onClick={this.goAbout.bind(this)}>Go About </button><br/><br/>
            {/* <button onClick={this.goContact.bind(this)}>Go Contact </button> */}
             

        </div>
    )
}
}