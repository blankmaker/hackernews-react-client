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
      for (let i = 0; i < 15; i++) {
        this.fetchStoryData(response[i]);
      }
    });
  },

  parseUrl(link) {
    return url.parse(link).hostname.replace(/www./, '');
  },

  fetchStoryData(id) {
    const storyUrl = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json';

    $.get(storyUrl, (response) => {
      response.parsedDomain = this.parseUrl(response.url);
      this.storyData.push(response);
      this.trigger(this.storyData);
    });
  },

});

export default StoryStore;