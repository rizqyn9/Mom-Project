import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Products from './Products'

const ProductList = (props) => {
    const {admin} = props
    const [products , setProducts] = useState([])
    const [load, setLoad] = useState(true)
    useEffect(() => {
        axios.get('http://localhost:3005/catalogue')
        .then(res => {
            console.log(res.data);
            setProducts(res.data)
            setLoad(false)
        })
    },[])
    
    return (
        <div className="flex flex-wrap justify-center">
            {
                !load ? (
                    products.map(el => {
                        return <Products id={el._id} Title={el.Nama_Barang} Desc={el.Desc} Image={el.Images} Category={el.Category} Properties={el.Properties} Admin={admin}/>
                    })
                ) : null
            }
        </div>
    )
}

export default ProductList