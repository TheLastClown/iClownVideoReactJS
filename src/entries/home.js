/**
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';

//==============================//

const home = document.getElementById("home-container");

ReactDOM.render(
    <Home data={data}/>,
    home  
);