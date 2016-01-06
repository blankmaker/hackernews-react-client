import React from 'react/addons';
import ReactDOM from 'react-dom';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const { assert, expect } = chai;
const { TestUtils } = React.addons;

chai.should();
chai.use(sinonChai);

export {
  React,
  ReactDOM,
  chai,
  sinon,
  sinonChai,
  assert,
  expect,
  TestUtils,
};