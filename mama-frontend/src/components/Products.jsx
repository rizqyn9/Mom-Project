import React,{useState} from 'react';
import './Products.scss';
import {Link} from 'react-router-dom'
import {server} from '../const/data'
import Tags from './Tags';


const Product = (props) => {
    const {id,Title, Desc, Image, Category, Admin, Properties} = props
    const [activated, setActivated] = useState(false)

    const AdminFeature = () => {
        console.log(Image.file_path);
        if(Admin) {
            return (
                <div className="flex-auto flex w-full h-full">
                    <div className={`flex-auto h-full w-full flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-green-50 select-none  ${activated ? 'bg-green-400 text-green-50' : ''}`} onClick={() => setActivated(!activated)}>{activated? 'Kembali' : 'Detail Harga'}</div>
                    <div className="flex-auto h-full w-full flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-green-50 select-none "><Link to={`/product/${id}`}>Ubah</Link></div>
                </div>
            )
        } else {
            return <div className={`flex-auto h-full flex items-center justify-center cursor-pointer hover:bg-green-500 hover:text-green-50 select-none ${activated ? 'bg-green-400 text-green-50' : ''}`} onClick={() => setActivated(!activated)}>{activated? 'Kembali' : 'Detail Harga'}</div>
        }
    }
    return (
        <div className="card flex flex-col m-2 bg-green-200 shadow-xl rounded-xl overflow-hidden ">
            <div className=" flex-auto flex overflow-hidden border-b-2 border-green-400">
                <div className={`slider flex ${activated ? 'translate' : ''}`}>

                    {/* Tab View */}
                    <div className=" flex flex-col transition-transform duration-1000 width_inner">
                        <div className="flex flex-col">
                            {/* Image && Content Container */}
                            <div className="image_container  bg-cover" 
                                    style={{backgroundImage:`url("http://localhost:3005/${Image.file_name}")`}}
                                    ></div>
                        </div>

                        {/* Title & Tag */}
                        <div className="flex-auto text-xl font-semibold py-2 px-3">
                            <div>
                                {Title}
                            </div>
                            <div className="flex flex-wrap">
                                {/* Kategori */}
                                {/* {Category.map(el => {
                                    return <Tags Name={el} />
                                })} */}
                            </div>
                        </div>
                    </div>

                    {/* Tab Active */}
                    <div className=" flex flex-col  h-full width_inner p-4 items-center justify-center">
                        <h1 className="text-2xl font-bold tracking-widest">{Title}</h1>
                        <div className="wrapper whitespace-normal flex-auto w-full text-center mt-3">
                            {Desc}
                            {
                                Properties.map(el => {
                                    return(
                                    <div className="w-full flex justify-between font-bold italic px-4 mt-2">
                                        <div className="w-1/3 text-right">{el.Size} gr</div>
                                        <div className="w-1/3">Rp. {el.Price}</div>
                                    </div>)
                                })
                            }
                        </div>
                        <div>
                                {/* {
                                    Properties.map()
                                } */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab */}
            <div className="flex items-center font-bold text-green-600 h-8 ">
                {AdminFeature()}
            </div>
        </div>
    )
}


export default Product