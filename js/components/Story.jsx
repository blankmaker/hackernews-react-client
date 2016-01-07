import React from 'react';
import moment from 'moment';

export default class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {content} = this.props;

    return (
      <li className="hn-StoryListItem">
        <div className="hn-StoryListItem__Subcontainer">
          <a ref="title" className="hn-StoryListItem__Title" href={content.url}>{content.title}</a>
          <a ref="url" className="hn-StoryListItem__Url" href={content.url}>{content.parsedDomain}</a>
          <span className="hn-StoryListItem__Details">
            {content.score} points by {content.by} <span ref="time">{moment.utc(content.time * 1000).fromNow()}</span> | <span ref="comments">{content.kids ? content.kids.length : 0}</span> comments
          </span>
        </div>
      </li>
    );
  }
}

