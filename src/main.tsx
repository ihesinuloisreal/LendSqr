import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "../src/custom.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
