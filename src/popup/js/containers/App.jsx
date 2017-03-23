import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Tab, Tabs, Button } from 'react-bootstrap';

import Row from '../components/Row';
import SearchCompanyForm from './SearchCompanyForm';
import SimilarCompanyForm from './SimilarCompanyForm';
import styles from '../../sass/popup.sass';

export default class extends Component {
  render () {
    return (

      <Router>
        <div>
          <ul className="nav nav-tabs" role="tablist">
            <li><NavLink exact activeClassName={ styles.active_nav } to="/1">Companies</NavLink></li>
            <li><NavLink exact activeClassName={ styles.active_nav } to="/2">Similar companies</NavLink></li>
          </ul>
          <Redirect to="/1" />
          <br/>

          <Switch>
            <Route exact path="/1" component={SearchCompanyForm}/>
            <Route exact path="/2" component={SimilarCompanyForm}/>
          </Switch>
          
          <Row className={"styles.button_collection"}>
            <Button 
              type="submit"
              bsStyle="danger"
              onClick={ () => chrome.runtime.reload() }
            >
              Refresh app
            </Button>
          </Row>
        </div>
      </Router>
    );
  }
};
