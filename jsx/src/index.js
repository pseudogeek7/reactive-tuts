// import react and react dom (usually from node modules)

import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText(){
//     return 'Click Me!';
// }
// create   a react component
// const App = function() {
//     return <div>Hi there</div>
// }
// using es2015 arrow keyword
const App = () => {
    const buttonText ={text: 'clickme'};
    const labelText = 'Enter name';
    const style={ backgroundColor:'blue', color:'white'};
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text"/>
            <button style={style}>

                {/* {getButtonText()} */}
                {buttonText.text}
            </button>
        </div>
    );
};
// take react component and show it on screen
ReactDOM.render(<App />, document.querySelector('#root'));