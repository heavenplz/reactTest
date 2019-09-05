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
     
        var cmp = {user:this.refs.user.value,content:this.refs.content.value}

        var tempArr = JSON.parse(localStorage.getItem("CmpD")||'[]'); 

        tempArr.unshift(cmp);

        localStorage.setItem("CmpD",JSON.stringify(tempArr))

        this.refs.user.value = this.refs.content.value = '';
        
        alert('提交成功');

        this.props.reload();
        
    }

}