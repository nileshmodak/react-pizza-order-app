import { render, screen } from '@testing-library/react';
import PizzaSelection from './PizzaSelection';

test('renders types of pizza', () => {
  render(<PizzaSelection handleChange={jest.fn()} />);
  const elem = screen.getByText(/Choose one of the 3 pizza sizes/i);
  const small = screen.getByLabelText("Small ($15)");
  const medium = screen.getByLabelText("Medium ($20)");
  const large = screen.getByLabelText("Large ($20)");
  expect(elem).toBeInTheDocument();
  expect(small).toBeInTheDocument();
  expect(medium).toBeInTheDocument();
  expect(large).toBeInTheDocument();
});

test('renders toppings of pizza', () => {
    render(<PizzaSelection handleChange={jest.fn()} />);
    const elem = screen.getByText(/Choose any combination of the following toppings/i);
    const olives = screen.getByLabelText("Olives (+$3)");
    const pepperoni = screen.getByLabelText("Pepperoni (+$4)");
    const mushroom = screen.getByLabelText("Mushrooms (+$2)");
    expect(elem).toBeInTheDocument();
    expect(olives).toBeInTheDocument();
    expect(pepperoni).toBeInTheDocument();
    expect(mushroom).toBeInTheDocument();
});
