import React from 'react'
export default class BindEvent extends React.Component{
    constructor(){
        super();
        this.state = {msg:"what"}
    }

    consolea = (msg)=>{
        console.log(msg);
        console.log("bb");
        this.setState({msg:"1234sdf"},function(){console.log(this.state.msg+"@")});
    }

    txtChanged = (e) => {
        //this.setState({msg:e.target.value})
        this.setState({msg:this.refs.itxt.value})
    }
    
    render(){
        return <div>
            <button onClick={()=>this.consolea('haha1')}>{this.state.msg}</button><hr/>
            <input type="text" value={this.state.msg} onChange={(e) => this.txtChanged(e)} ref="itxt"></input>
            </div>
    }
}