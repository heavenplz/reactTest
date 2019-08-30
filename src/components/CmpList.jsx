import React from 'react'//是组件就依赖于react

import CmpItem from '@/components/Cmpitem'

import cssobj from '@/css/cmpList.css'

import bootstrap from 'bootstrap/dist/css/bootstrap.css';

export default class CmpList extends React.Component{
    constructor(){
        super();
        this.state = {
            CmpData:[
                {id:1,user:'龙女',content:'我要夺回铁王座'},
                {id:2,user:'雪诺',content:'我要让百姓幸福，国家太平'},
                {id:3,user:'小恶魔',content:'我的武器就是我的智慧'}
            ]
        }
    }
    render(){
        return <div>
            <button>按钮</button>
            <h1 className={[cssobj.title,'titleTest'].join(" ")}>权利的游戏</h1>
            {this.state.CmpData.map(item => <CmpItem {...item} key={item.id}></CmpItem>)}
            </div>
    }
}