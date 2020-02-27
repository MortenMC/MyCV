import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FrontPage from '../FrontPage'
import EducationPage from '../EducationPage'
import ExperiencePage from '../ExperiencePage'
import Layout from './Layout'

const store = createStore(reducers);
console.log(store.getState());
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route path='/Uddannelser' component={EducationPage}/>
            <Route path='/Erhvervserfaring' component={ExperiencePage}/>
            <Route path='/' component={FrontPage}/>
          </Switch>
          
        </Layout>
      </Router>
    </Provider>
    
  );
}

export default App;