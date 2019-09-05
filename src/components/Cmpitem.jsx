import React from 'react'

import cssObj from '@/css/cmpItem.scss'

const Style = {
    itemStyle: { border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc' },
    userStyle: { font: '14px' },
    contentStyle: { font: '12px' }
}

export default function CmpItem(item) {
    return <div style={Style.itemStyle}>
        <h1 className="title" style={Style.userStyle}>人物：{item.user}</h1>
        <p id={cssObj.cmpContent} sytle={Style.contentStyle}>言论：{item.content}</p>
    </div>
}