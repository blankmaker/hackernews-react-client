import Reflux from 'reflux';
import $ from 'jquery';
import StoryActions from '../actions/StoryActions.js';

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

  fetchStoryData(id) {
    const storyUrl = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json';

    $.get(storyUrl, (response) => {
      this.storyData.push(response);
      this.trigger(this.storyData);
    });
  },

});

export default StoryStore;