import React,{useState} from 'react'
import './Products.scss'

const Products = (props) => {
    const [activated, setActivated] = useState(false)
    const activeBtn = () => {
        setActivated(!activated)
        console.log(activated);
    } 
    return (
        <div className={`relative bg-white p-3 rounded-3xl m-3  border-green-800 shadow-md card ${activated ? " cardActive" :''}` }  onClick={activeBtn}>
            <div style={{width:"15rem", height:"15rem", backgroundImage:`url(${props.Image})` }} className="bg-green-900 rounded-2xl bg-cover bg-no-repeat border-b-4 border-green-800"></div>
            <div className="content relative h-full content py-1 px-3 mt-1 flex  justify-between w-full transition-all duration-1000">
                <div className="detail font-semibold w-full">
                    <h1 className="title text-2xl font-bold">{props.Title}asdasdas</h1>
                    {
                        !activated ? <h3 className={`content-child text-base font-light italic cursor-pointer ${activated}`} onClick={activeBtn}>Detail</h3> : null
                    }
                    <div className="desc text-base font-black italic flex flex-col mt-2 w-full p-5">
                        <div className="flex justify-between w-full text-xl text-white">
                            <h1 className="w-24 ">1KG</h1>
                            <h1 className="w-24 text-right ">10000</h1>
                        </div>
                        <div className="flex justify-between w-full text-xl">
                            <h1 className="w-24 ">1KG</h1>
                            <h1 className="w-24 text-right ">10000</h1>
                        </div>
                        <div className="flex justify-between w-full text-xl">
                            <h1 className="w-24">1KG</h1>
                            <h1 className="w-24 text-right ">50000</h1>
                        </div>
                        <h3 className="content-child text-base font-semibold italic self-center mt-3 cursor-pointer hover:text-green-300" onClick={activeBtn}>Close</h3>
                    </div>
                </div>
                {/* <div className="absolute right-1 top-4 flex justify-center items-center px-4 h-8  bg-green-200 rounded-full text-green-900 cursor-pointer float-right" onClick={activeBtn}>{!activated ? 'Detail' : 'Close'}</div> */}
            </div>
        </div>
    )
}

export default Products