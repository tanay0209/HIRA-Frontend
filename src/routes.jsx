import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { HomeScreen, About, Contact, Login, Signup, Collections } from "./pages"

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
                    element: <Collections />
                }]
            },
            ,
            {
                path: '/styles',
                children: [{
                    path: ':style',
                    element: <Collections />
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