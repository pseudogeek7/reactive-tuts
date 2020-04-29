import React from 'react';

class SearchBar extends React.Component {
    // onInputChange(event){
    //     console.log(event.target.value);
    // }
    state = { term: '' };
    // onFormSubmit (event) {
    //     event.preventDefault();
    //     console.log(this.state.term)
    // }
    onFormSubmit = (event)=>{
        event.preventDefault();
        //console.log(this.state.term)
        this.props.onSubmit(this.state.term);
    }
    render() {
        // for onChange prop this.inputChange will not have () otherwise it will be called with every render call
        // similar to onChange other event functions include onSubmit, onClick
        // another method of using eventhandler onChange={(e)=> console.log(e.target.value)}
        return (

            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search:</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}

                        />
                    </div>
                </form>

            </div>

        );
    }
}


export default SearchBar;