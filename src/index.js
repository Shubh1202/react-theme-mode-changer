
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import ThemeContextProvider from "./context-x/ThemeContextProvider"
import {ThemeContextProvider} from './context/ThemeContext'


const getRoot = document.getElementById("root")
const createRoot = ReactDOM.createRoot(getRoot)
createRoot.render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
)
