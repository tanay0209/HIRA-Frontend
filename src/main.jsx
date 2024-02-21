import ReactDOM from 'react-dom/client'
import router from './routes'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@material-tailwind/react";
import React from 'react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
