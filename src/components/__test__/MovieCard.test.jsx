import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/index';
import { BrowserRouter } from 'react-router-dom';
import MovieCard from '../MovieCard';

describe('Testing Movie Card ', () => {
    it('should render title', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <MovieCard movie={movieMockData}/>
                </BrowserRouter>
            </Provider>
        );
        expect(screen.getByText("Oppenheimer")).toBeInTheDocument();
        expect(screen.getByText("(8.2)")).toBeInTheDocument();
        expect(screen.getByText("description")).toBeInTheDocument();
    });
});

const movieMockData = {
  "id": 872585,
  "backdrop_path": "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
  "overview": "description",
  "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  "title": "Oppenheimer",
  "vote_average": 8.2,
}
