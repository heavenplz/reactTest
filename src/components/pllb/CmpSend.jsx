import React from 'react'

export default class CmpSend extends React.Component{
    render(){
        return <div style={{padding:'10px'}}>
        <span>评论人：</span><input type="text" ref="user"/>
        <div>评论内容：</div>
        <textarea cols="30" rows="10" ref="content"></textarea>
        <div><input type="button" value="提交" onClick={this.submit}/></div>
        </div>;
    } 

    submit = ()=>{
        console.log(this.refs.user.value+"@"+this.refs.content.value);
        
        var temp = JSON.parse(localStorage.getItem("CmpD"));

        var cmp = {"user":{this.refs.user.value}}
        
    }

}