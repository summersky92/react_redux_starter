import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';//library need just the name of the package
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';//import file with path
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyB2QVUzl3t7CP2fXnukIfnDYelhQItFHVs';



// create some Component this part will produce some html code
//function based component
/*const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}*/
//top of all the other component need to do the fetching of data since others are all based on this data

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };//array here. since it's a list of objects, start as empty value

    //selective video object

    // search put into constructor here makes it every time when it opens will do the search for the state
    //YTSearch({key: API_KEY, term:'keyboard'}, (videos) => {//call back function here
      //console.log(data);
      //this.setState({ videos: videos });// set state when the new search result comes back
    //  this.setState({
    //    videos: videos,
    //    selectedVideo: videos[0]//makes it to be the first video and rerender the app return
    //   });// when the key is same as the value, es6 function
   // })
  //move the top to the buttom to be able to search for items and call back here
    this.videoSearch('keyboard'); //pass in search from here
  }

  //call back for search

  videoSearch(term) {
    YTSearch({key: API_KEY, term:term}, (videos) => {//call back function here
      //console.log(data);
      //this.setState({ videos: videos });// set state when the new search result comes back
      this.setState({
        videos: videos,
        selectedVideo: videos[0]//makes it to be the first video and rerender the app return
       });// when the key is same as the value, es6 function
    })
  }

  render() {
    //this.props can be access anywhere
    //need to pass from the parent method App to the child VideoList method to display the data
    //like passing the prop to
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    //the above which make the real function to be called every 300 mini seconds
     /*<!--SearchBar onSearchTermChange={term => this.videoSearch(term)}/-->*/

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}



//take this Component generated HTML and in to the page
//and put in to the page DOM
ReactDOM.render(<App />, document.querySelector('.container'));

//one Component per file(each one, one file)
