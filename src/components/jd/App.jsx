import React from 'react'

import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd';


import HomeContainer from '@/components/home/HomeContainer'
import MoiveContainer from '@/components/moive/MoiveContainer'
import AboutContainer from '@/components/about/AboutContainer'

const { Header, Content, Footer } = Layout;

import style from '@/css/app.scss'

export default class App extends React.Component{
    
    constructor(){
        super();
    }
    
    render(){
        return <Router><Layout className="layout" style={{height:'100%'}}>
        <Header>
          <div className={style.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
           <Menu.Item key="1"><Link to="/home">首页</Link></Menu.Item> 
           <Menu.Item key="2"> <Link to="/moive">电影</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/about">关于</Link></Menu.Item>
          </Menu>
        </Header>


        <Content style={{ backgroundColor:'#fff'}}>
            <Route path="/home" component={HomeContainer}></Route>
            <Route path="/moive" component={MoiveContainer}></Route>
            <Route path="/about" component={AboutContainer}></Route>

          {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div> */}
        </Content>


        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
        </Router>
    }

}