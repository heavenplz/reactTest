import React from 'react';
export default class CmpItem extends React.Component{


    render(){
        return <div style={{border:'1px solid black',margin:'10px',padding:'10px'}}>
            <h3>评论人:{this.props.plr}</h3>
            <h5>评论内容:{this.props.plnr}</h5>
        </div>
    }
}