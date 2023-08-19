import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useQuery } from 'react-query'

import { useNavigate } from 'react-router'
import movieImage from '../assets/video-player.png'
function MovieCard({ movie }) {
    const naviaget = useNavigate()
    return (
        <Card
            style={{ width: '100%' }}
            className="card"
            onClick={() => {
                naviaget('/movie/' + movie.id)
            }}
        >
            <Card.Img
                variant="top"
                src={
                    movie?.poster_path
                        ? 'https://image.tmdb.org/t/p/original/' +
                          movie.poster_path
                        : movieImage
                }
            />
            <Card.Body>
                <Card.Title className="card_title d-flex justify-content-between">
                    <div className="card_desc">{movie.title} </div>
                    <div>({movie.vote_average})</div>
                </Card.Title>
                <Card.Text className="card_desc">{movie.overview}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MovieCard
