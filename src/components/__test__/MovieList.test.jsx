import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/index';
import { BrowserRouter } from 'react-router-dom';
import MovieCard from '../MovieCard';
import MovieList from '../MovieList';

describe('Testing Movie List ', () => {
    it('should render all movies', () => {
        render(
                <BrowserRouter>
                    <MovieList data={movieListMockData} />
                </BrowserRouter>
        );
        expect(screen.getByText("Movie1")).toBeInTheDocument();
        expect(screen.getByText("(8)")).toBeInTheDocument();
        expect(screen.getByText("description1")).toBeInTheDocument();

        expect(screen.getByText("Movie2")).toBeInTheDocument();
        expect(screen.getByText("(9)")).toBeInTheDocument();
        expect(screen.getByText("description1")).toBeInTheDocument();

        expect(screen.getByText("Movie3")).toBeInTheDocument();
        expect(screen.getByText("(10)")).toBeInTheDocument();
        expect(screen.getByText("description3")).toBeInTheDocument();
    });
});

const movieListMockData = [,
{
  "id": 1,
  "backdrop_path": "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
  "overview": "description1",
  "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  "title": "Movie1",
  "vote_average": 8,
},{
  "id": 2,
  "backdrop_path": "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
  "overview": "description2",
  "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  "title": "Movie2",
  "vote_average": 9,
},{
  "id": 3,
  "backdrop_path": "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
  "overview": "description3",
  "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  "title": "Movie3",
  "vote_average": 10,
}]
