import React, { Suspense, useMemo } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// pages
import Home from './pages/Home'
import {AppProvider} from './Context'


function App() {



  return (
    <Suspense fallback={() => <p>loading...</p>}>
      <AppProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
      </AppProvider>
    </Suspense>
  );
}

export default App;
