import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/index';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';

describe('Testing Header ', () => {
  it('movie details page', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Header pathname="/movie/123" />
            </BrowserRouter>
        </Provider>
    );
    expect(screen.queryByText(/Movie Details/i)).toBeInTheDocument();
  });
it('home page', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Header pathname="/" />
            </BrowserRouter>
        </Provider>
    );
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });
});