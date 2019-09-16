import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import { Home, About, Contact } from '../Containers'




export default class BasicRouter extends React.Component {
    render() {
        return (
            <Router>



                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />


            </Router>
        )
    }
}









