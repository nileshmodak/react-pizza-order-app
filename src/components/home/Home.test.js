import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders UserDetails component default', () => {
  render(<Home />);
  const elem = screen.getByText(/Enter name and address details/i);
  expect(elem).toBeInTheDocument();
});
