import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';

const hackerAPI = new Firebase('https://hacker-news.firebaseio.com/v0/topstories');

class App extends React.Component {

  componentWillMount() {
    let stuff;
    hackerAPI.once('value', (values) => {
      stuff = values.val();
      if (ReactDOM.findDOMNode(this)) {
        this.setState({ids: stuff});
      }
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <p>Welcome? to the beginnings of Hacker News. Let build.</p>
      </div>
    );
  }
}

App.state = {
  ids: []
};

ReactDOM.render(<App />, document.getElementById('app'));
