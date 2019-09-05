import React from 'react';
export default class CmpItem extends React.Component{


    render(){
        return <div style={{border:'1px solid black',margin:'10px',padding:'10px'}}>
            <h3>评论人:{this.props.user}</h3>
            <h5>评论内容:{this.props.content}</h5>
        </div>
    }
}