import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import EditProduct from '../components/EditProduct'

const ProductDetails = (props)  => {
    // const {id} = props
    const [isLoad, setIsLoad] = useState(true)
    const [data, setData] = useState(null)
    
    let {id} = useParams ()
    useEffect(() => {
        axios.get(`http://localhost:3005/product/${id}`).then(el => {
            setData(el)
            setIsLoad(false)
        }).catch (err => {
            console.log(err);
        })
    },[])

    return (
        <div>
            asds
            {
                !isLoad ? <EditProduct data={data.data}/>: null

            }
        </div>
    )
}

export default ProductDetails