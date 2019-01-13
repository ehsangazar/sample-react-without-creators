import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

test('Button should render correctly', () => {
  const component = renderer.create(
    <Button>Test</Button>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});