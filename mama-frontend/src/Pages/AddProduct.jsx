import React from 'react'
import Form from '../components/Form'

const AddProduct = (props) => {
    return (
        <div className="bg-green-50 flex flex-col justify-center items-center px-28">
            <h1 className="text-2xl font-bold text-green-800 self-start">Tambah</h1>
            <Form />
        </div>
    )
}

export default AddProduct;