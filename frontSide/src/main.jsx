// Importing StrictMode from React to enable additional runtime checks and warnings
import { StrictMode } from 'react'

// Importing createRoot from react-dom/client to render the root component of the app
import { createRoot } from 'react-dom/client'

// Importing the main App component which contains all routes and components of the app
import App from './App.jsx'

// Importing specific font weights for Roboto font for consistent typography across the app
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Rendering the App component inside the root element of the HTML page
// Using StrictMode for development to identify potential problems with the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
