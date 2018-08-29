import React, { Component } from 'react';
// import Apps2 from "./Apps2";


class Apps2 extends Component {
    render() {
          this.props.variable.map(eachitem)
        var variable =
            [
                {
                    name: "King Kong",
                    releasedate: 2005,
                    genre: "action"
                },
                {    name: "mulan",
                    releasedate: 2003,              
                    genre: "action"
                },
                {
                    name: "monsters ink",
                    realeasedate:1775 ,
                   genre: "Annoying"
                }
            ];
        return (
            <div className="App">
                <Returner variable={variable}/>

                <App/>
                <h1>This is our new app</h1>
                <moviesetup Array = {Apps2} anotherOne={"idek"}/>
            </div>
        );
    }
}

export default Apps2;

// the variable arry of collections should be in a Netflix component. I think this was supposed to be a DisplayMovie component, but the mapping didn't start. You'll have to complete the mapping of each element in order to return unique results to the variable to later call it in your render's return.
