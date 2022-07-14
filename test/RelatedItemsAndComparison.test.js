import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App.js';

describe('Related Items and Comparison Tests', () => {
    it('should contains the heading 1', () => {
    render(<RInCIndex />);
        const heading = screen.getByText(/Hi/i);
        expect(heading).toBeInTheDocument()
    });
});