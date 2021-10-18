import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import NotFound from './components/NotFound';

// Lazy load for splitting purpose
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/photos">Go to photo page</Link>
            </li>
            <li>
              <Link to="/photos/add">Go to Add new photo page</Link>
            </li>
            <li>
              <Link to="/photos/edit">Go to Edit photo page</Link>
            </li>
          </ul>

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
