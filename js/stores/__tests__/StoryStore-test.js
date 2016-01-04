import React from 'react/addons';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

let { assert, expect } = chai,
    { TestUtils } = React.addons;

chai.should();
chai.use(sinonChai);

describe("StoryStore", () => {
  it('should work too', () => {
    expect(1).to.equal(1);
  });
});