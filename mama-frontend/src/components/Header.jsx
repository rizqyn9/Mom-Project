import React from 'react'
import LinkNav from './LinkNav'


const Header = (props) => {
    const {admin} = props


    return (
        <nav className=" h-16 sm:px-24 px-5 bg-green-200 flex justify-between items-center mb-10 ">
            <div className=" text-3xl font-bold text-green-900">E </div>
            {/* <div className="">
                <LinkNav name="Link1" />
                <LinkNav name="Link2" />
                <LinkNav name="Link3" />
                <LinkNav name="Link4" />
            </div> */}
            <a className={admin ? "hover:text-green-800 cursor-pointer font-bold" : ''} href={admin ? '/admin/create' : null} >
                {
                    admin ? "Add Product" : null 
                }
            </a>
        </nav>
    )
}

export default Header