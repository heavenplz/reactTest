import React from 'react'//是组件就依赖于react

import CmpItem from '@/components/Cmpitem'

import cssobj from '@/css/cmpList.scss'

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
//css没有被模块化，不会向外暴露
console.log(bootstrap);


export default class CmpList extends React.Component {
    constructor() {
        super();
        this.state = {
            CmpData: [
                { id: 1, user: '龙女', content: '我要夺回铁王座' },
                { id: 2, user: '雪诺', content: '我要让百姓幸福，国家太平' },
                { id: 3, user: '小恶魔', content: '我的武器就是我的智慧' }
            ],
            count: 0
        }
    }




    render() {

        return <div>
            {/* <button className={[bootstrap.btn , bootstrap['btn-primary']].join(' ')}>按钮</button> */}
            <div className="panel panel-primary"></div>
            <button className="btn btn-primary" onClick={this.countPlus}>{this.state.count}</button>
            <h1 id="abcd" className={[cssobj.title, 'titleTest'].join(" ")}>权利的游戏</h1>
            {this.state.CmpData.map(item => <CmpItem {...item} key={item.id}></CmpItem>)}
        </div>
    }

    countPlus = () => {
        console.log(this.state.count + "@@@");
        //this.props.initCount = this.props.initCount++;
        this.setState({ "count" : this.state.count + 1 })
        console.log(this.state.count);
    }

    componentDidMount() {
        console.log(document.getElementById("abcd"));
    }


    shouldComponentUpdate(nextProps,nextState) {
        console.log(this.state.count+"update"+nextState.count);
        // return this.state.count % 2 === 0 ? true : false;
        return nextState.count % 2 === 0 ? true : false;
    }
}