import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { HomeScreen, About, Contact, Login, Signup, Collections, ProductDetail } from "./pages"

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
                path: '/collections',
                children: [{
                    path: ':collection',
                    element: <Collections />,
                }]
            },
            {
                path: '/product',
                children: [{
                    path: ':productId',
                    element: <ProductDetail />
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