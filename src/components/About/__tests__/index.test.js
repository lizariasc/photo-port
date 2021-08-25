import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// component we will be testing
import About from '..';

// ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

// declare the component we're testing
describe('About component', () => {
    // First Test: verify that the component is rendering
    it('renders', () => {
        render(<About />);
      });
    

  // Second Test
})
  