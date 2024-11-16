// Test hello world component

import * as React from 'react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Hello } from './components/Hello';

describe('Hello World', () => { // 1
  it('should render hello world', () => { // 2
  render(
      <Hello />
    );

    const helloWorld = screen.getByText('Hello World'); // 3
 
    expect(helloWorld).toBeInTheDocument();
  });
}
