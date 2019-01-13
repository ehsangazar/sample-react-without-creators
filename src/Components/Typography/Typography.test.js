import React from 'react';
import SPAN from './SPAN';
import H3 from './H3';
import renderer from 'react-test-renderer';

test('H3 should render correctly', () => {
  const component = renderer.create(
    <H3>Test</H3>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('SPAN should render correctly', () => {
  const component = renderer.create(
    <SPAN>Test</SPAN>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});