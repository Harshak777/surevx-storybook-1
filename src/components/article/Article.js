import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Submenu from './Submenu1';
import Anothersub from './Anothersub';

import './Article.css';

const Article = () => (
    <Router>
    <div className="Container">
        <Route path="/" exact component={Submenu} />
        <Route path="/another" component={Anothersub} />
    </div>
    </Router>
);

export default Article;