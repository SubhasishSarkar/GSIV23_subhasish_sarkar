import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import store from './store'
const queryClient = new QueryClient()
function App() {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Provider>
    )
}

export default App
