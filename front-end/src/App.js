import React from 'react';
import NavBar from './components/NavBar';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/search">
                        <NavBar />
                        <SearchPage />
                    </Route>
                    <Route path="/">
                        <NavBar />
                        <SearchPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
