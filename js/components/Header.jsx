import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hn-Header">
        <h1>Hacker News</h1>
      </div>
    );
  }
}