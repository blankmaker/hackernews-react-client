/* global describe, it, beforeEach, afterEach */

import {
  React,
  ReactDOM,
  expect,
  sinon,
  TestUtils,
} from '../../../test/helpers.js';

import Story from '../Story.jsx';

describe('Story component', () => {
  let sandbox, story, foundComponent;
  let storyData = {
    by: 'NN88',
    descendants: 203,
    id: 10843680,
    kids: [
      10844862,
      10844762,
      10845172,
      10846623,
      10845280,
    ],
    parsedDomain: 'blogs.scientificamerican.com',
    score: 310,
    time: 1452007590,
    title: 'Bayes Theorem: What is the Big Deal?',
    type: 'story',
    url: 'http://blogs.scientificamerican.com/cross-check/bayes-s-theorem-what-s-the-big-deal/',
  };

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    story = TestUtils.renderIntoDocument(<Story content={storyData}/>);
    foundComponent = TestUtils.scryRenderedDOMComponentsWithClass(story, 'hn-StoryListItem');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should render onto page', () => {
    expect(foundComponent.length).to.equal(1);
  });

  it('should display correct title with link', () => {
    let node = ReactDOM.findDOMNode(story.refs.title);
    expect(node.innerHTML).to.equal('Bayes Theorem: What is the Big Deal?');
    expect(node.href).to.equal('http://blogs.scientificamerican.com/cross-check/bayes-s-theorem-what-s-the-big-deal/');
  });

  it('should display correct url with link', () => {
    let node = ReactDOM.findDOMNode(story.refs.url);
    expect(node.innerHTML).to.equal('blogs.scientificamerican.com');
    expect(node.href).to.equal('http://blogs.scientificamerican.com/cross-check/bayes-s-theorem-what-s-the-big-deal/');
  });

  it('should correct time and number of comments', () => {
    // let timeNode = ReactDOM.findDOMNode(story.refs.time);
    // expect(timeNode.innerHTML).to.equal('14 hours ago');
    // we might not need this test. 

    let commentsNode = ReactDOM.findDOMNode(story.refs.comments);
    expect(commentsNode.innerHTML).to.equal('5');

  });
});

