import React from 'react';
import CmpItem from '@/components/pllb/CmpItem'
import CmpSend from './CmpSend';
export default class CmpHome extends React.Component {
    constructor() {
        super();
        this.state = {
            cmpData: [{
                plr: "小A",
                plnr: "A123"
            }, {
                plr: "小B",
                plnr: "B123"
            }, {
                plr: "小C",
                plnr: "C123"
            }]
        }
    }
    render() {
        return <div>
            <h1 >评论组件</h1>
            
            <CmpSend></CmpSend>

            {this.state.cmpData.map((item, i) => 
            {   
                return <CmpItem key={i} {...item}></CmpItem>}
            )}

        </div>


    }
}