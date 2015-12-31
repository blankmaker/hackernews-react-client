import React from 'react';
import ReactDOM from 'react-dom';
import Rebase from 're-base';
import '../css/styles.scss';
import Header from './components/Header.jsx';
import Story from './components/Story.jsx';

const HackerAPIBase = Rebase.createClass('https://hacker-news.firebaseio.com/v0/');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.firebaseRef = HackerAPIBase.fetch('topstories', {
      context: this,
      asArray: true,
      then: this.fetchStoryData,
    });
  }

  fetchStoryData(ids) {
    this.setState({ storyIds: ids.slice(0,30) });
    ids.slice(0, 30).forEach((id) => {
      HackerAPIBase.bindToState('item/' + id, {
        context: this,
        state: 'storyID_' + id,
      });
    });
  }

  componentWillUnmount() {
    HackerAPIBase.removeBinding(this.firebaseRef);
  }

  // restrict number of stories to 30
  // make it possible to load more

  render() {
    return (
      <div className="hn-Container">
        <Header />
        <div className="hn-StoriesPanel">
          <ol className="hn-StoryList">
            {this.state ? this.state.storyIds.map((storyId) => <Story key={storyId} story={this.state['storyID_' + storyId]}/>) : null}
          </ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));