import React from 'react' //创建组件、虚拟dom元素、生命周期
import ReactDOM from 'react-dom'  //把创建好的组件和虚拟dom放到页面上展示


import { DatePicker } from 'antd';
// import 'antd/dist/antd.css';


import CmpItem from '@/components/Cmpitem'
import CmpList from '@/components/CmpList'
import BindEvent from './components/BindEvent';

import {BrowserRouter as Router,HashRouter,Link,Route} from 'react-router-dom'

import PageHome from '@/components/PageHome'
import TestLoadable from '@/components/TestLoadable';
// import CmpHome from '@/components/pllb/CmpHome';

import App from '@/components/jd/App'

// const PageHome = loadable(()=>import('@/components/PageHome'))

ReactDOM.render(

<App></App>
,document.getElementById('app'));