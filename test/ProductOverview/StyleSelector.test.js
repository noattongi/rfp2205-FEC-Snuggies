import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import Overview from '../../client/src/Components/ProductOverview/Overview.jsx';

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

test('Renders text components', async () => {
  render(<Overview />);

  const text = await screen.findAllByText("Read [#] Reviews");
  expect(text).toBeTruthy();

  // await waitFor(() => screen.getByText("Camo Onesie"));
});