/* global describe, it, beforeEach, afterEach */

import {
  expect,
  sinon,
} from '../../../test/helpers.js';

import StoryStore from '../StoryStore.js';

describe('StoryStore', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('parseUrl should return only domain', () => {
    let parsedWWWUrl = StoryStore.parseUrl('http://www.spiegel.de/international/zeitgeist/archaeologists-uncover-clues-to-why-vikings-abandoned-greenland-a-876626.html');
    expect(parsedWWWUrl).to.equal('spiegel.de');

    let parsedUrlWithNoWWW = StoryStore.parseUrl('http://blogs.scientificamerican.com/cross-check/bayes-s-theorem-what-s-the-big-deal/');
    expect(parsedUrlWithNoWWW).to.equal('blogs.scientificamerican.com');
  });
});