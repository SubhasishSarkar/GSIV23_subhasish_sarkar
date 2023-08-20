import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import { AiFillHome } from 'react-icons/ai'
import Col from 'react-bootstrap/Col'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searcheMovie } from '../store/slice/searchSlice'
function Header({ pathname}) {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch() 
    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            dispatch(searcheMovie(search))
        }, 500)
        return () => clearTimeout(delayInputTimeoutId)
    }, [search, 500])
    return (
        <Navbar className="bg-body-tertiary justify-content-between px-2">
            <div className="container gap-2">
                <Col className="col-10">
                    {pathname.includes('/movie/') ? (
                        'Movie Details'
                    ) : (
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    )}
                </Col>
                <Col className="col-2 d-flex justify-content-end">
                    <Link to="/">
                        <AiFillHome />
                    </Link>
                </Col>
            </div>
        </Navbar>
    )
}

export default Header
