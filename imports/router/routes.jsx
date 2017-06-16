import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'




import AppMain from '../ui/App-Main.jsx';

class Navigation extends React.Component {
    componentDidMount()
    {
        $(".button-collapse").sideNav({
            menuWidth: 150, // Default is 240
            //edge: 'right', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper green">
                    <a href="#" className="brand-logo">Data Logger</a>

                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/" activeClassName="active">Data Logger</Link></li>
                        <li><Link to="/findTrees" activeClassName="active">Find a Tree</Link></li>
                        <li><Link to="/addTree" activeClassName="active">Add a Tree</Link></li>
                        <li><Link to="/login" activeClassName="active">Login</Link></li>
                    </ul>

                    <ul className="side-nav" id="mobile-demo">
                        <li><Link to="/" activeClassName="active">Home</Link></li>
                        <li><Link to="/findTrees" activeClassName="active">Find a Tree</Link></li>
                        <li><Link to="/addTree" activeClassName="active">Add a Tree</Link></li>
                        <li><Link to="/login" activeClassName="active">Login</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}


const Routes = () => (
    <Router>
            <div>
                {/*<Navigation/>*/}

                {/*<ul>*/}
                    {/*<li><Link to="/">Home</Link></li>*/}
                    {/*<li><Link to="/about">About</Link></li>*/}
                    {/*<li><Link to="/topics">Topics</Link></li>*/}
                {/*</ul>*/}

                {/*<hr/>*/}

                <Route exact path="/" component={AppMain}/>
                <Route path="/about" component={AppMain}/>
                <Route path="/topics" component={AppMain}/>
            </div>
    </Router>
);
export default Routes;

