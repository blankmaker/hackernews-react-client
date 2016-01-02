import React from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.scss';
import Header from './components/Header.jsx';
import Story from './components/Story.jsx';
import $ from 'jquery';
import StoryStore from './stores/StoryStore.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stories: []};
  }

  componentDidMount() {
    this.unsubscribe = StoryStore.listen((payload) => {
      this.setState({stories: payload});
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  // restrict number of stories to 30
  // make it possible to load more
  render() {
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