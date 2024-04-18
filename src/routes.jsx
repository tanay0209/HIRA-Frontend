import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { HomeScreen, About, Contact, Login, Signup, Collections, ProductDetail, Wishlist, Cart, Orders, Profile, ForgotPassword, ResetPassword, CreateProduct } from "./pages"
import { AdminRoute } from './components'
import Bracelet from './temp/Bracelet'
import Broch from './temp/Broch'
import Ring from './temp/Ring'
import LadiesRings from './temp/LadiesRings'
import AdminDashboard from './pages/AdminDashboard'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomeScreen />
            },
            // {
            //     path: '/collections',
            //     children: [{
            //         path: ':collection',
            //         element: <Collections />
            //     }]
            // },
            {
                path: '/collections/Bracelet',
                element: <Bracelet />

            },
            {
                path: '/collections/Broch',
                element: <Broch />

            },
            {
                path: '/collections/Ring',
                element: <Ring />

            },
            {
                path: '/collections/Ladies',
                element: <LadiesRings />

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
                element:
                    <AdminRoute>
                        <AdminDashboard />
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
                path: '/admin/create-product',
                element: <AdminRoute>
                    <CreateProduct />
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