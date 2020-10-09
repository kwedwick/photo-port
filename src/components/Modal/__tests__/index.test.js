import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';
afterEach(cleanup);

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

const mockToggleModal = (currentPhoto, i) => {
    setCurrentPhoto({...currentPhoto, index: i})
    setIsModalOpen(!isModalOpen);
};

describe('Modal is rendering', () => {
    it('renders', () => {
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
    });

    it('matches snapshot DOM node structure', () => {
        // Arrange the snapshot - declare variables
        // Assert the match
        const { asFragment } = render(<Modal />)
        expect(asFragment()).toMatchSnapshot()
    });

});


describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        fireEvent.click(getByText('Close this modal'));

        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})  