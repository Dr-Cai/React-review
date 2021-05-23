import { Layout } from 'antd';

import { Component } from 'react';
import './App.css';
import SideMenu from './components/SideMenu'
import Container from './components/Container'
import { HashRouter as Router,Switch,Redirect,Route } from 'react-router-dom'

const { Header, Content, Footer } = Layout;

class App extends Component {
  render(){
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <SideMenu/>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route path='/:path' component={Container} />
              <Redirect path='/' to='/home' />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Router>
  )
  }
}
export default App;
