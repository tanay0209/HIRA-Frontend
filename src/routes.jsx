import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { HomeScreen, About, Contact, Login, Signup, Collections, ProductDetail, Wishlist, Cart, Orders, Profile, ForgotPassword, ResetPassword } from "./pages"
import { AdminRoute } from './components'

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
                    element: <Collections />
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
            },
            {
                path: '/admin/dashboard',
                element: <AdminRoute>
                    { }
                </AdminRoute>
            },
            {
                path: '/admin/create/category',
                element: <AdminRoute>
                    { }
                </AdminRoute>
            },
            {
                path: '/admin/categories',
                element: <AdminRoute>
                    { }
                </AdminRoute>
            },
            {
                path: '/admin/products',
                element: <AdminRoute>
                    { }
                </AdminRoute>
            },
            {
                path: '/admin/create/product',
                element: <AdminRoute>
                    { }
                </AdminRoute>
            }, {
                path: '/admin/update/product/:productId',
                element: <AdminRoute>
                    { }
                </AdminRoute>
            },
            {
                path: '/cart',
                element: <Cart />

            },
            {
                path: '/wishlist',
                element: <Wishlist />

            },
            {
                path: '/my-orders',
                element: <Orders />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            }
            ,
            {
                path: '/reset-password',
                element: <ResetPassword />
            }
        ]
    }
])

export default router