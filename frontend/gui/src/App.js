import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import ArticleListView from './containers/ArticleListVIew';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          <ArticleListView/>
        </CustomLayout>
      </div>
    );
  }
}

export default App;
