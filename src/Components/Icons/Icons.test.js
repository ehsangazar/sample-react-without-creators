import React from 'react';
import HarnessHorseIcon from './HarnessHorseIcon';
import Logo from './Logo';
import ReadyHorseIcon from './ReadyHorseIcon';
import RunningHorseIcon from './RunningHorseIcon';
import renderer from 'react-test-renderer';

test('HarnessHorseIcon should render correctly', () => {
  const component = renderer.create(
    <HarnessHorseIcon />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('ReadyHorseIcon should render correctly', () => {
  const component = renderer.create(
    <ReadyHorseIcon />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('RunningHorseIcon should render correctly', () => {
  const component = renderer.create(
    <RunningHorseIcon />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Logo should render correctly', () => {
  const component = renderer.create(
    <Logo />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});