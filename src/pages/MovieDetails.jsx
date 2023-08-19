import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { fetcher } from '../hooks'
import movieImage from '../assets/video-player.png'
import { AiFillStar } from 'react-icons/ai'
import { BiSolidTimeFive } from 'react-icons/bi'
import {MdDateRange} from 'react-icons/md'
function MovieDetails() {
    const { id } = useParams()
    const { isLoading, isFetching, error, data } = useQuery(
        ['movie-details', id],
        () => fetcher(`/movie/${id}`)
    )
    const { isLoading: isLoadingCredits, isFetching: isFetchingCredits, data : dataCredits } = useQuery(
        ['movie-credits', id],
        () => fetcher(`/movie/${id}/credits`)
    )

    if (isLoading || isFetching) {
        return <div className="loading">Loading&#8230;</div>
    }
    if (error)
        return <div style={{marginTop: "60px"}}>Error : Movie not found</div>
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
                                    {(data.runtime - data.runtime % 60 )/ 60}:{data.runtime % 60 }<BiSolidTimeFive/>
                                </div>
                                <div className="age_wrapper">
                                    {data.release_date.split('-')[0]} <MdDateRange/>
                                </div>
                                <div className="age_wrapper">
                                    {data.vote_average} <AiFillStar/>
                                </div>
                            </div>
                            <div>{data.overview}</div>
                            {(!isFetchingCredits && !isLoadingCredits) &&(<div>
                                <div>
                                    <span className="lable">Director :</span>
                                    <span style={{fontSize: "13px"}}>{dataCredits.crew.find((item) => {
                                        if (item.job === "Director") {
                                            return true
                                        }
                                    }).name}</span>
                                </div>
                                <div>
                                    <span className="lable">Cast :</span>
                                    {dataCredits.cast.map((item,index,array) => {
                                        if(index+1 === array.length)
                                            return <span key={item.id} style={{ fontSize: "13px" }}>{item.name}</span>
                                        return <span key={item.id} style={{ fontSize: "13px" }}>{item.name},</span>
                                    })}
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MovieDetails
