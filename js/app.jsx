import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome to the beginnings of Hacker News. Let build.</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
