import ReactDOM from 'react-dom/client'
import router from './routes'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@material-tailwind/react";
import React from 'react';
import { Provider } from 'react-redux'
import store from './store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
