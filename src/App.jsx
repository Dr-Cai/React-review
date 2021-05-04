import { Layout, Menu, Breadcrumb } from 'antd';

import { Component } from 'react';
import './App.css';
import SideMenu from './components/SideMenu'

const { Header, Content, Footer } = Layout;

class App extends Component {
  render(){
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SideMenu/>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
  }
}
export default App;
