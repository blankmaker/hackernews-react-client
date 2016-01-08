import React from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.scss';
import Header from './components/Header.jsx';
import Story from './components/Story.jsx';
import StoryStore from './stores/StoryStore.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      index: 30,
    };
  }

  componentDidMount() {
    this.unsubscribe = StoryStore.listen((payload) => {
      this.setState({stories: payload});
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  updateIndex() {
    let {index} = this.state;
    this.setState({index: index + 30});
  }

  render() {
    let {stories, index} = this.state;
    stories = stories.slice(0, index);

    return (
      <main className="hn-Container">
        <Header />
        <section className="hn-StoriesPanel">
          <ol className="hn-StoryList">
            { stories.map((story) => <Story key={story.id} content={story} />) }
          </ol>
          {index < 150 ? <div className="hn-StoriesPanel__MoreLink" onClick={this.updateIndex.bind(this)}>More &darr;</div> : null}
        </section>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));