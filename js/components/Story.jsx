import React from 'react';
import url from 'url';
import moment from 'moment';

export default class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  getDomain(link) {
    return url.parse(link).hostname;
  }

  render() {
    const {story} = this.props;
    if (story) {
      return (
        <li className="hn-StoryListItem">
          <div className="hn-StoryListItem__Subcontainer">
            <a className="hn-StoryListItem__Title" href={story.url}>{story.title}</a>
            <a className="hn-StoryListItem__Url" href={story.url}>{this.getDomain(story.url)}</a>
            <span className="hn-StoryListItem__Details">{story.score} points by {story.by} {moment.utc(story.time * 1000).fromNow()} hours ago | {story.kids ? story.kids.length : 0} comments</span>
          </div>
        </li>
      );
    } else {
      return null;
    }
  }
}

