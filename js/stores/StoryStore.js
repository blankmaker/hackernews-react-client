import Reflux from 'reflux';
import $ from 'jquery';
import StoryActions from '../actions/StoryActions.js';
import url from 'url';

const StoryStore = Reflux.createStore({
  listenables: [StoryActions],
  storyData: [],
  init() {
    this.fetchStories();
  },

  fetchStories() {
    const idUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    $.get(idUrl, (response) => {
      response.slice(0,151).forEach((id) => {
        this.fetchStoryData(id);
      });
    });
  },

  parseUrl(link) {
    return url.parse(link).hostname.replace(/www./, '');
  },

  fetchStoryData(id) {
    const storyUrl = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json';

    $.get(storyUrl, (story) => {
      story.parsedDomain = story.url ? this.parseUrl(story.url) : 'blankmaker.com';
      this.storyData.push(story);
      this.trigger(this.storyData);
    });
  },

});

export default StoryStore;