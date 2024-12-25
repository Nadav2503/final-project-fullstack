// Importing React to use JSX syntax
import React from "react";

// Importing BrowserRouter from react-router-dom for routing management
import { BrowserRouter } from "react-router-dom";

// Importing the main routing component that handles the routes of the application
import Router from "./routers/Router";

// Importing CustomThemeProvider to manage the application's theme
import CustomThemeProvider from "./providers/CustomThemeProvider";

// Importing SnackbarProvider to handle snackbars (temporary messages) in the app
import SnackbarProvider from "./providers/SnackbarProvider";

// Importing Layout component which wraps the app with common UI elements (header, footer, etc.)
import Layout from "./layout/Layout";

import VisitorProvider from "./providers/VisitorProvider";
//import reset setting
import './styles/Global.css'
import AutoLogout from "./providers/AutoLogout";

// Main application entry point.
export default function App() {
  return (
    // Wrapping the app with BrowserRouter for routing functionality
    <BrowserRouter>
      {/* Wrapping the entire app with CustomThemeProvider for consistent theming */}
      <CustomThemeProvider>
        {/* Wrapping the app with SnackbarProvider for handling snackbars */}
        <SnackbarProvider>
          <VisitorProvider>
            <AutoLogout />
            {/* Wrapping all components with Layout to apply common layout elements */}
            <Layout>
              {/* Main Router component that handles navigation and page rendering */}
              <Router />
            </Layout>
          </VisitorProvider>
        </SnackbarProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  );
}
