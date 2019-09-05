import React from 'react' //创建组件、虚拟dom元素、生命周期
import ReactDOM from 'react-dom'  //把创建好的组件和虚拟dom放到页面上展示

import CmpItem from '@/components/Cmpitem'
import CmpList from '@/components/CmpList'
import BindEvent from './components/BindEvent';

import PageHome from '@/components/PageHome'

ReactDOM.render(<div>
{/* <CmpList></CmpList>
<BindEvent></BindEvent> */}
<PageHome></PageHome>

</div>,document.getElementById('app'));