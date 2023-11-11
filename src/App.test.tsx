import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders App', async () => {
  render(<App />);
  screen.debug();
  expect(screen.getByText('完了リスト')).toBeInTheDocument();
});

test("AddBtn should be able to work correctly", async () => {
  render(<App />);
  userEvent.click(screen.getByText('追加'))
  expect(await screen.findAllByRole("button")).toHaveLength(1);
});