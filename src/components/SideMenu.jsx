import React, { Component, Fragment } from 'react';
import { Layout, Menu } from 'antd';
import menuList from '../sideConfig/menuList'
import { Link } from 'react-router-dom'

const { Sider } = Layout;
const { SubMenu } = Menu;
const mapMenuItem = list => list.map(({ title, key, icon,children }, index) => {
	if(children){
		return <SubMenu key={key} icon={icon} title={title} >{mapMenuItem(children)}</SubMenu>
	}else{
		return (
		<Menu.Item key={key} icon={icon} >
			<Link to={key}>{title}</Link>	
		</Menu.Item>
		)
	}
})

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
			<Fragment>
				<Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
							<div className="logo" />
							<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
								{mapMenuItem(menuList)}
							</Menu>
				</Sider>
			</Fragment>
		);
	}
}

export default SideMenu;