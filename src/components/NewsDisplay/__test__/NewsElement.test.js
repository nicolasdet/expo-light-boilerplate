import { render, screen, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import NewsElement from '../NewsElement';
import NewsDisplay from '../NewsDisplay';

test('it render element with text', async () => {
  const { getByText } = render(<NewsElement label="test" />);
  const NewsElementLabel = await getByText('test');
  expect(NewsElementLabel).toBeTruthy();
});

test('it render element without text', async () => {
  const { getByText } = render(<NewsElement />);
  const NewsElementLabel = await getByText('');
  expect(NewsElementLabel).toBeTruthy();
});

test('it render Date dropdown', async () => {
  const { getByText } = render(<NewsDisplay />);
  const NewsElementLabel = await getByText('Filtrer par dates');
  expect(NewsElementLabel).toBeTruthy();
});

test('we can click and open dropdown', async () => {
  const { getByText } = render(<NewsDisplay />);
  const NewsElementLabel = await getByText('Filtrer par dates');
  expect(NewsElementLabel).toBeTruthy();
  // On pourrait chercher par Test iD ça serai plus rapide
  fireEvent.press(NewsElementLabel);

  // Snapshot ?
  const FilterElementAsc = await getByText('ordre croissant');
  expect(FilterElementAsc).toBeTruthy();
});
