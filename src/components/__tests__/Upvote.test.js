import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Upvote from '../Upvote';

test('clicking on the Upvote toggles the selection state', () => {
  // Arrange
  const onClickMock = jest.fn();
  const { container } = render(<Upvote isSelected={false} onClick={onClickMock} />);

  // Act
  const upvoteContainer = container.firstChild;
  fireEvent.click(upvoteContainer);

  // Assert
  expect(onClickMock).toHaveBeenCalled();
});