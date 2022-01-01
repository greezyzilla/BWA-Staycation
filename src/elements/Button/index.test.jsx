/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Button from './index';

it('Click should not allowed when isDisabled is true', () => {
  const { container } = render(<Button isDisabled />);

  expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

it("Should render 'loading' or spinner when isLoading is true", () => {
  const { container, getByText } = render(<Button isLoading />);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector('span')).toBeInTheDocument();
});

it("Should render <a> tag when type is 'link' isExternal is true", () => {
  const { container } = render(<Button type="link" isExternal />);

  expect(container.querySelector('a')).toBeInTheDocument();
});

it("Should render <Link> tag when type is 'link' isExternal is true", () => {
  const { container } = render(<Router><Button type="link" /></Router>);

  expect(container.querySelector('a')).toBeInTheDocument();
});
