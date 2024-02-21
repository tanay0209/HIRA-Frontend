import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { HomeScreen, About, Contact, Login, Signup, Category } from "./pages"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomeScreen />
            },
            {
                path: '/categories',
                children: [{
                    path: ':category',
                    element: <Category />
                }]
            },
            {
                path: '/about',
                element: <About />
            }, {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    }
])

export default router