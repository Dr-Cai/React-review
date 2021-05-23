import React, { Component,Fragment } from 'react';
import { Breadcrumb } from 'antd';

class Container extends Component {
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    {
                    this.props.location.pathname.slice(1).split('/').map((path,index)=>(
                        <Breadcrumb.Item key={index}>{path}</Breadcrumb.Item>
                    ))
                    }
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    {this.props.location.pathname.slice(1).split('/').reverse()[0]}
                </div>
            </Fragment>
        );
    }
}

export default Container;