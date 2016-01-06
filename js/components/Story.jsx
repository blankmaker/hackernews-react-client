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
          <a className="hn-StoryListItem__Title" href={content.url}>{content.title}</a>
          <a className="hn-StoryListItem__Url" href={content.url}>{content.parsedDomain}</a>
          <span className="hn-StoryListItem__Details">{content.score} points by {content.by} {moment.utc(content.time * 1000).fromNow()} hours ago | {content.kids ? content.kids.length : 0} comments</span>
        </div>
      </li>
    );
    // } else {
    //   return null;
    // }
  }
}

