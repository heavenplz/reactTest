import React from 'react';
import CmpItem from '@/components/pllb/CmpItem'
import CmpSend from './CmpSend';
export default class CmpHome extends React.Component {
    constructor() {
        super();
        
        this.state = {
            cmpData: [{
                user: "小A",
                content: "A123"
            }, {
                user: "小B",
                content: "B123"
            }, {
                user: "小C",
                content: "C123"
            }]
        }
    }
    render() {
        
        return <div>
            <h1 >评论组件</h1>
            
            <CmpSend reload = {this.cmpRefresh}></CmpSend>
            {this.state.cmpData.map((item, i) => 
            {   
                return <CmpItem key={i} {...item}></CmpItem>}
                
            )}

        </div>
    }

    componentWillMount(){
        this.cmpRefresh();
    }

    cmpRefresh =()=>{
        var tempA = JSON.parse(localStorage.getItem("CmpD")||'[]');

        this.setState({cmpData:tempA}) 
    }
}