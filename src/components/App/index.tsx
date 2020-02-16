import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FrontPage from '../FrontPage'
import EducationPage from '../EducationPage'
import ExperiencePage from '../ExperiencePage'
import Layout from './Layout'

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/Uddannelse' component={EducationPage}/>
          <Route path='/Erfaring' component={ExperiencePage}/>
          <Route path='/' component={FrontPage}/>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
