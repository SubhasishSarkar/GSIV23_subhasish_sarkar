import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ data }) {
    return (
        <div className="list_container">
            <div className="cards_conatiner">
                {data &&
                    data.map((item) => {
                        return (
                            <div className="card_wrapper" key={item.id}>
                                <MovieCard movie={item} />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default MovieList
