import React from 'react';
import url from 'url';

export default class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  getDomain(link) {
    return url.parse(link).hostname;
  }

  // need to adjust Unix time
  render() {
    const {story} = this.props;
    if (story) {
      return (
        <li className="hn-StoryListItem">
          <div className="hn-StoryListItem__Subcontainer">
            <a className="hn-StoryListItem__Title" href={story.url}>{story.title}</a>
            <a className="hn-StoryListItem__Url" href={story.url}>{this.getDomain(story.url)}</a>
            <span className="hn-StoryListItem__Details">{story.score} points by {story.by} 2 hours ago | {story.kids ? story.kids.length : 0} comments</span>
          </div>
        </li>
      );
    } else {
      return null;
    }
  }
}

