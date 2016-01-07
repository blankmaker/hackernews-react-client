/* global describe, it, beforeEach, afterEach */

import {
  React,
  expect,
  sinon,
  TestUtils,
} from '../../../test/helpers.js';

import Header from '../Header.jsx';

describe('Header component', () => {
  let sandbox, header;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    header = TestUtils.renderIntoDocument(<Header />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should render onto page', () => {
    let foundClass = TestUtils.scryRenderedDOMComponentsWithClass(header, 'hn-Header');
    expect(foundClass.length).to.equal(1);
  });
});