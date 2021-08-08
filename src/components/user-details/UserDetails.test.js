import { render, screen } from '@testing-library/react';
import UserDetails from './UserDetails';

let data = {
    name:'',
    street_name: '',
    card_number: '',
    street_name: '',
};

test('renders name and address form', () => {
  render(<UserDetails handleChange={(e) => jest.fn()} values={data}/>);
  const elem = screen.getByText(/Enter name and address details/i);
  expect(elem).toBeInTheDocument();
});
