import React from 'react'
import style from '@/css/moive-item.scss'
export default class MoiveItem extends React.Component {
    render() {
        return <div>
            <h3>电台类别：{this.props.title}</h3>
            {this.props.channellist.map(item => {
                return <div className={style.box} key={item.name}>
                    <div>电台名称：{item.name}</div>
                     <div>
                    {item.thumb ?
                        <img className={style.img} src={item.thumb}></img>
                        :
                        <img className={style.img} src={item.avatar}></img>}
                        </div>
                </div>
            })}
        </div>
    }
}