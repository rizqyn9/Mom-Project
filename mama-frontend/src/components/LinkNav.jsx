import React from 'react'
import './LinkNav.scss'

const LinkNav = (props) => {
    return (
        <a className=" px-5 py-2 effect-3 cursor-pointer " href={props.link}>{props.name}</a>
    )
}

export default LinkNav