import Layout from './components/Layout'
import Home from './pages/Home'
import { createBrowserRouter } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'
const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/movie/:id',
                element: <MovieDetails />,
            },
        ],
    },
])
export default router
