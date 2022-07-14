import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import Overview from '../../client/src/Components/ProductOverview/Overview.jsx';
import axios from 'axios';
import mockProductData from './mockData/mockProductData.js';
import mockProductStyles from './mockData/mockStyleData.js';

jest.mock('axios');

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

test('Renders text components when given the Camo Onesie product', async () => {
  axios.get.mockImplementation((url) => {
    switch (url) {
      case '/snuggie/products':
        return Promise.resolve({
          data: mockProductData.camoOnesie
        });
      case '/snuggie/styles':
        return Promise.resolve({
          data: mockProductStyles.camoOnesieStyles
        });
      default:
        return Promise.reject(new Error('not found'));
    }
  });

  render(<Overview />);

  const text = await screen.findAllByText("Read [#] Reviews");
  expect(text).toBeTruthy();

  await waitFor(() => screen.getByText("Camo Onesie"));
  const productName = await screen.getByText("Camo Onesie");
  expect(productName).toBeTruthy();
  await waitFor(() => screen.getByText("Style > Forest Green & Black"))
  const styleName = await screen.getAllByText("Style > Forest Green & Black");
  expect(styleName).toHaveLength(1);
});