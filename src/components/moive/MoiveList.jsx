import React from 'react'
import { Spin, Alert } from 'antd';
import fetchJsonp from 'fetch-jsonp'
import MoiveItem from './MoiveItem';
export default class MoiveList extends React.Component{

    constructor(){
        super();
        this.state = {
            isLoading : true
        }
    }


    componentWillMount(){
        // fetchJsonp('http://vue.studyit.io/api/getluobo').then(response=>{
        //     return response.json();
        // }).then(data=>{
        //     console.log(data);
        // });
        // setTimeout(() => {
        //     this.setState({isLoading:false});
        // }, 1000);

        this.fetchData();

    }



    fetchData(){
        fetch('https://api.apiopen.top/musicBroadcasting')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            this.setState({
                isLoading:false,
                dataList :data.result
            });
        })
    }

    render(){
        return <div>{this.renderLoding()}</div>
    }

    renderLoding(){
        if(this.state.isLoading){
            return  <Spin tip="Loading...">
            <Alert
              message="正在获取内容"
              description="马上呈现"
              type="info"
            />
          </Spin>
        }else{
            return <div >{this.state.dataList.map(item=>{
                return <MoiveItem key={item.cId} {...item}></MoiveItem>
            })}</div>
        }
       
    }
    
}