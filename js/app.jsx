import React from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.scss';
import Header from './components/Header.jsx';
import Story from './components/Story.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stories: []};
  }


  componentDidMount() {
    const idUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';

    $.get(idUrl, (response) => {
      for (let i = 0; i < 15; i++) {
        this.fetchStoryData(response[i]);
      }
    });
  }

  fetchStoryData(id) {
    const storyUrl = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json';

    $.get(storyUrl, (response) => {
      this.setState({stories: this.state.stories.concat(response)});
    });
  }

  // componentWillUnmount() {
  //   HackerAPIBase.removeBinding(this.firebaseRef);
  // }

  // restrict number of stories to 30
  // make it possible to load more

  render() {
    // console.log(this.state);
    const {stories} = this.state;

    return (
      <div className="hn-Container">
        <Header />
        <div className="hn-StoriesPanel">
          <ol className="hn-StoryList">
            { stories.map((story) => <Story key={story.id} content={story} />) }
          </ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));