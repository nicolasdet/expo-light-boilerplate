import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import App from '../App';

it('renders Home correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Header Text is visible from App', async () => {
  const expectedHeaderText = 'Evenements Culturels à venir';
  const { findByText } = render(<App />);
  const HeaderTextOutput = await findByText(expectedHeaderText);
  expect(HeaderTextOutput).not.toBe(null);
});
