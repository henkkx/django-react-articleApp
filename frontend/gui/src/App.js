import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routes'
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import ArticleListView from './containers/ArticleListVIew';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout>
            <BaseRouter/>
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

export default App;
