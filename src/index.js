import React from 'react' //创建组件、虚拟dom元素、生命周期
import ReactDOM from 'react-dom'  //把创建好的组件和虚拟dom放到页面上展示





import CmpItem from '@/components/Cmpitem'
import CmpList from '@/components/CmpList'




ReactDOM.render(<div>
<CmpList></CmpList>

</div>,document.getElementById('app'));