import React from 'react'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import {Link,Route} from 'react-router-dom';

import MoiveList from '@/components/moive/MoiveList';

export default class MoiveContainer extends React.Component{
    render(){
        return     <Layout style={{height:'100%'}}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ borderRight: 0 }}
          >
              <Menu.Item key="1"><Link to="/moive/hot/1">正在热映</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/moive/comming-soon/1'>即将上映</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/moive/top250/1">Top250</Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ paddingLeft: '1px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 10,
              margin: 0,
              minHeight: 280,
              height:'100%'
            }}
          >
            <Route path="/moive/:type/:page" component={MoiveList}></Route>

          </Content>
        </Layout>
      </Layout>
    }
    

}