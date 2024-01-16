import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeScreen, About, Categories, Contact } from "./pages"

import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomeScreen />
      }, {
        path: '/about',
        element: <About />
      }, {
        path: '/categories',
        element: <Categories />
      }, {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
