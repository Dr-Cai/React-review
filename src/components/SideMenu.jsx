import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import menuList from '../sideConfig/menuList'

const { Sider } = Layout;
const { SubMenu } = Menu;
const mapMenuItem = children=>children.map(({title,key,icon},index)=><Menu.Item key={key} icon={icon} >{title}</Menu.Item>)

class SideMenu extends Component {
    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render() {
        const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {menuList.map(({title,key,icon,children},index)=>
                    children?
                    <SubMenu key={key} icon={icon} title={title}>
                    {mapMenuItem(children)}
                    </SubMenu>:<Menu.Item key={key} icon={icon}>{title}</Menu.Item>)}
                </Menu>
            </Sider>
        );
    }
}

export default SideMenu;