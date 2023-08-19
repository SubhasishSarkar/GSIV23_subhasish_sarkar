import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { fetcher } from '../hooks'
import movieImage from '../assets/video-player.png'
function MovieDetails() {
    const { id } = useParams()
    const { isLoading, isFetching, error, data } = useQuery(
        ['movie-details', id],
        () => fetcher(`/movie/${id}`)
    )

    if (isFetching || isLoading) {
        return <div>Loading...</div>
    }
    return (
        <>
            {data && (
                <div
                    style={{
                        backgroundImage: `${
                            data?.backdrop_path
                                ? `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`
                                : `url(${movieImage})`
                        }`,
                    }}
                    className="details_container"
                >
                    <div className="text_wrapper">
                        <div style={{ width: '40%', marginBottom: '10%' }}>
                            <h1>{data.title}</h1>
                            <div className="info_container">
                                {data.adult ? (
                                    <div className="age_wrapper"> A 18+</div>
                                ) : (
                                    <div className="age_wrapper"> U/A</div>
                                )}
                                <div className="age_wrapper">
                                    {data.runtime} min{' '}
                                </div>
                                <div className="age_wrapper">
                                    {data.release_date.split('-')[0]}
                                </div>
                                <div className="age_wrapper">
                                    {data.vote_average}
                                </div>
                            </div>
                            <div>{data.overview}</div>
                            <div>
                                <div>
                                    <span className="lable">Director :</span>
                                    <span>{data.title}</span>
                                </div>
                                <div>
                                    <span className="lable">Cast :</span>
                                    <span>{data.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MovieDetails
