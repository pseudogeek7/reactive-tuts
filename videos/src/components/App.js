import React from 'react';
import SearchBar from './SearchBar'; 
import youtube, {API_DEFAULT_PARAMS} from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component{
    state = {videos: []};
    onTermSubmit = async  term => {
       const response = await youtube.get('/search', {
            params:{
                q: term,
                ...API_DEFAULT_PARAMS
                
            }
        });
        console.log(response.data.items);
        this.setState({videos: response.data.items}); 
    };

    render(){
        
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
                <VideoList videos={this.state.videos}/>
            </div>
        ); 
        
    }


}

export default App;