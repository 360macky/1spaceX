import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Suite test Navbar', () => {
  it('should render the text of the logo', () => {
    const { getByText } = render(<Navbar />);
    const sloganElement = getByText(/SpaceX Capsules/i);
    expect(sloganElement).toBeInTheDocument();
  });
});
