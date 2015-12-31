import React from 'react';

export default class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  // need to shorten URL
  render() {
    const {story} = this.props;
    if (story) {
      return (
        <li className="hn-StoryListItem">
          <div className="hn-StoryListItem__Subcontainer">
            <span className="hn-StoryListItem__Title">{story.title}</span>
            <span className="hn-StoryListItem__Url">{story.url}</span>
            <span className="hn-StoryListItem__Details">{story.score} points by {story.by} 2 hours ago | {story.kids.length} comments</span>
          </div>
        </li>
      );
    } else {
      return null;
    }
  }
}

