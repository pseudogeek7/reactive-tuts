import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    //    // instantly called on instance creation of class
    //     constructor(props){
    //         //requirement calls constructor of parent class
    //         super(props);   
    //    }
    state = { lat: null, errorMessage: '' };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // callbacks, first is success callback and other is err callback
            // callback do not runs with constructor, it runs when value is fetched successfully at some point in time
            // in future
            (position) => {
                // we called set state for updating state object
                this.setState({ lat: position.coords.latitude });
                // we DID NOT used direct assignment, which is ONLY used for initialization
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
        }

        return <Spinner message='Plz axcept the loc req' />

    }

    // react requirement that render method is must otherwise i will throw an err
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }


}


ReactDOM.render(<App />, document.querySelector('#root'));


