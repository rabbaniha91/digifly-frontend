import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { ContextProvider } from "./context/ContextProvider.jsx"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<App />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
)
