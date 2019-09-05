import React from 'react'
export default class Page1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            routerParams:props.match.params
        }
     
    }
    render(){
        return <div>{this.state.routerParams.type+"@@@@"+this.state.routerParams.id}</div>
    }
}