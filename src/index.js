import React from 'react';
import ReactDOM from 'react-dom/client';
import { EarlyAccess  } from './components/pages';
import { Footer } from './components/molecules';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './styles'

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Router >
          <Routes >
            <Route path="/" element={ <EarlyAccess/>} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);