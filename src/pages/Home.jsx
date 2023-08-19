import React, { useEffect, useState } from 'react'
import { fetcher } from '../hooks'
import { useMutation, useQuery } from 'react-query'
import MovieList from '../components/MovieList'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector } from 'react-redux'
export default function Home() {
    const [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [totalPages, setTotalPages] = useState('')
    const searchQuery = useSelector((state) => state.searchQuery)
    const { isLoading, isFetching, error, data } = useQuery(
        ['movie-list'],
        () =>
            fetcher(
                searchQuery
                    ? `/search/movie?query=${searchQuery}&page=1`
                    : `/movie/upcoming?page=1`
            )
    )
    const { mutate, isLoading: isLoadingLoadmore } = useMutation(({ url }) =>
        fetcher(url)
    )

    useEffect(() => {
        if (data) {
            setList(data.results)
            setTotalPages(data.total_pages)
        }
    }, [data])

    useEffect(() => {
        if (isLoading || isFetching) {
            return
        }
        serachMovies(searchQuery)
    }, [searchQuery, isLoading, isFetching])
    const serachMovies = (query) => {
        const url = query
            ? `/search/movie?query=${query}&page=1`
            : `/movie/upcoming?page=1`
        mutate(
            { url: url },
            {
                onSuccess(data) {
                    setList(data.results)
                    setPage(1)
                    setTotalPages(data.total_pages)
                },
                onError(error, variables, context) {
                    console.log(error)
                },
            }
        )
    }
    const handleLoadMore = () => {
        if (page === totalPages) {
            setHasMore(false)
        }
        mutate(
            {
                url: searchQuery
                    ? `/search/movie?query=${searchQuery}&page=${page + 1}`
                    : `/movie/upcoming?page=${page + 1}`,
            },
            {
                onSuccess(data) {
                    setList((prev) => {
                        return [...prev, ...data.results]
                    })
                    setPage((prev) => prev + 1)
                },
                onError(error, variables, context) {
                    console.log(error)
                },
            }
        )
    }

    if (isLoading || isFetching) {
        return <div className="loading">Loading&#8230;</div>
    }
    return (
        <>
            {list.length ? (
                 <div style={{ marginTop: '60px' }}>
                    <InfiniteScroll
                        dataLength={list.length} //This is important field to render the next data
                        next={handleLoadMore}
                        hasMore={hasMore}
                        loader={
                            <h4 style={{ textAlign: 'center' }}>Loading...</h4>
                        }
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        <MovieList data={list} />
                    </InfiniteScroll>
                </div>
            ) : (
                <p>No result</p>
            )}
        </>
    )
}
