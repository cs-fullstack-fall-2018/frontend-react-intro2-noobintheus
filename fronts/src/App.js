import React, { Component } from 'react';
import App from './App'
// import './App.css';

class Apps2 extends Component {
    render() {
        return (
            <div><h1>{eachItem.name}</h1>
                <h1>{eachitem.releasedate}</h1>
                <h1>{eachitem.genre}</h1>

            </div>
        );
        return(<p>{returnthis}</p>)
    }
}

export default Apps2;
               
// Make sure you change your class name to match your file name. This should say App instead of App2 in the class name in the beginning and the export at the bottom. Also, you don't have an eachItem or returnthis variable here or passing it in from anywhere. This wouldn't work.
