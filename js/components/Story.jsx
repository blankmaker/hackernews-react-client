import React from 'react';

export default class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="hn-StoryListItem">
        <div className="hn-StoryListItem__Subcontainer">
          <span className="hn-StoryListItem__Title">Six years of Go</span>
          <span className="hn-StoryListItem__Url">(golang.org)</span>
          <span className="hn-StoryListItem__Details">184 points by jaxondu 2 hours ago | 101 comments</span>
        </div>
      </li>
    );
  }
}

