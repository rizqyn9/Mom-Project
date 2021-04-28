import React from 'react'


const button= ({title, style}) => {
    return (
        <div className={`px-3 py-2 ${style} `}>{title}</div>
    )
}

const red = ({title, style ="bg-red-400"}) => {
    return button({title,style : "bg-red-300" })
}

export default {
    button,
    red
}