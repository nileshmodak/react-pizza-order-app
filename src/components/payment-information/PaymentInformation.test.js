import { render, screen } from '@testing-library/react';
import PaymentInformation from './PaymentInformation';

let data = {
    name:'',
    card_number: ''
};

test('renders payment information', () => {
  render(<PaymentInformation handleChange={jest.fn()} values={data}/>);
  const elem = screen.getByText(/Payment Information/i);
  expect(elem).toBeInTheDocument();
});
