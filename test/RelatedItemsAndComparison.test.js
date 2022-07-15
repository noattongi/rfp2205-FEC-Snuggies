import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../client/src/App.js';
import RInCIndex from '../client/src/Components/RelatedItemsAndComparison/RInCIndex.jsx';
import RelatedItemsList from '../client/src/Components/RelatedItemsAndComparison/RelatedItemsList.jsx';
import RelatedCards from '../client/src/Components/RelatedItemsAndComparison/RelatedCards.jsx';

    test('Related Items and Comparison section renders', () => {
    render(<RInCIndex/>)
    });

    test('RelatedCards child component renders', () => {
        render(<RelatedItemsList/>);
            const childComponent = screen.getByText(/⭐️/i);
            expect(childComponent).toBeInTheDocument();
    })
