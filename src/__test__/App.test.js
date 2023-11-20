import React from 'react';
import renderer from 'react-test-renderer';

it('renders Home correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

// tester l'affichage pour la home page
