import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from '..';

// release memory allocation between tests.
afterEach(cleanup);

describe('Nav component', () => {
    // baseline test to check that the ContactForm component is rendering properly
    it('renders', () => {
      render(<ContactForm />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);

        expect(asFragment()).toMatchSnapshot();
      });
});

it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
  })
   
  it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
  })