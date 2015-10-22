import React from 'react';
import ReactDOM from 'react-dom';
// import Firebase from 'firebase';
import Rebase from 're-base';
import '../css/styles.scss';

const HackerAPIBase = Rebase.createClass('https://hacker-news.firebaseio.com/v0/');
// const HackerAPI = new Firebase('https://hacker-news.firebaseio.com/v0/');

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
    // this.firebaseRef = new Firebase('https://hacker-news.firebaseio.com/v0/topstories');
    // this.firebaseRef.on('value', (dataSnapshot) => {
    //   this.items = dataSnapshot.val();
    //   this.setState({
    //     items: this.items,
    //   });
  }

  fetchStoryData(ids) {
    ids.forEach((id) => {
      HackerAPIBase.bindToState('item/' + id, {
        context: this,
        state: 'storyID_' + id,
      });
    });
  }

  componentWillUnmount() {
    HackerAPIBase.removeBinding(this.firebaseRef);
  }

  render() {
    return (
      <div className="body">
        <div className="header">
          <p>Welcome? to the beginnings of Hacker News. Let build.</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));