import React, {useState} from 'react'
import '../components/Products.scss'
import Tags from './Tags'


const Product = (props) => {
	const [activated, setActivated] = useState(false)
	const toggleActivated = () => setActivated(!activated)
	return(
		<div className="card rounded-2xl shadow-md m-3 bg-cover" style={{width:"20rem", height:"29rem", backgroundImage: `url("${props.Image}")`}} onMouseEnter={toggleActivated} onMouseLeave={toggleActivated} >
			<div className="content">
				<div className="text-4xl font-bold title">
					<h2 className="text-green-50">{props.Title}</h2>
					<div className="flex flex-wrap mt-1 justify-center">
						<Tags />
						<Tags />
						<Tags />
					</div>
					{
						activated ? null : <a className=" text-lg cursor-pointer" id="view">View More</a>
					}
				</div>
				<div className="copy w-full  font-bold flex flex-col justify-center items-center font-black tracking-widest">
					{/* {props.Content} */}
					<div className="w-2/3 flex justify-between my-2">
						<h2>2Kg</h2>
						<h2>10.000</h2>
					</div>
					<div className="w-2/3 flex justify-between my-2">
						<h2>2Kg</h2>
						<h2>10.000</h2>
					</div>
					<div className="w-2/3 flex justify-between my-2">
						<h2>2Kg</h2>
						<h2>10.000</h2>
					</div>
					{
						!activated ? null : <a className="mt-3 text-md cursor-pointer" id="view">Close</a>
					}
				</div>
			</div>
		</div>
	)
}

export default Product