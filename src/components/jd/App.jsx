import React from 'react'

import {BrowserRouter as Router,HashRouter,Link,Route} from 'react-router-dom'

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
        return <HashRouter><Layout className="layout" style={{height:'100%'}}>
        <Header>
          <div className={style.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[window.location.hash.split('/')[1]]}
            style={{ lineHeight: '64px' }}
          >
           <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item> 
           <Menu.Item key="moive"> <Link to="/moive/hot/1">电影</Link></Menu.Item>
            <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
          </Menu>
        </Header>


        <Content style={{ backgroundColor:'#fff',height:'100%'}}>
            <Route path="/home" component={HomeContainer}></Route>
            <Route path="/moive" component={MoiveContainer}></Route>
            <Route path="/about" component={AboutContainer}></Route>

          {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div> */}
        </Content>


        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
        </HashRouter>
    }

}