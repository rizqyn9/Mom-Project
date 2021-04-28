import axios from 'axios';
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../services/api'

import Dropzone from 'react-dropzone'



const Form = () => {
    const [userInfo, setuserInfo] = useState({
        file:[],
        filepreview:null,
    });

    const [inputFields, setInputFields] = useState([ {Size:'' , Price:'' } ])
    const [title , setTitle] = useState('')
    const [desc , setDesc] = useState('')
    const [error, setError] = useState(null)
    const history = useHistory()

    const AddInput = () => {
        setInputFields([...inputFields, {Size: '' , Price:'' }])
    }

    const RemoveInput = (index) => {
        const values = [...inputFields]
        values.splice(index,1)
        setInputFields(values)
    }

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "Price") {
          values[index].Price = event.target.value;
        } else {
          values[index].Size = event.target.value;
        }
        setInputFields(values);
    }

    const handleImageChange = (event) => {
        setuserInfo({ ...userInfo,
        file:event.target.files[0],
        filepreview:URL.createObjectURL(event.target.files[0]),
        });
    }

    const handleSubmit =  (e) => {
        e.preventDefault()
        try {
            // console.log(userInfo.file[0]);
            // console.log(inputFields);
            // const properties = new Blob(inputFields, { type: "text/xml"}) 
            const formData = new FormData()
            formData.append('Title' , title)
            formData.append('Desc', desc)
            formData.append('Properties' , JSON.stringify(inputFields))
            formData.append('Images', userInfo.file)

             axios.post('http://localhost:3005/addProduct', formData, {          
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(data => {
                // history.push('/')
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center w-full">
            
            <form onSubmit={e => handleSubmit(e)} encType='multipart/form-data' className="flex flex-col w-1/3">
                <div className="flex items-center justify-between mt-4">
                    <label htmlFor="Title" className="text-lg font-medium text-green-900 self-start tracking-wide">Judul</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}  placeholder="Judul" className="w-2/3 bg-green-200 px-3 py-1 rounded-md ring-green-300  focus:outline-none focus:bg-white focus:shadow-md focus:ring-2"/>
                </div>
                <div className="flex-auto flex items-center justify-between mt-4">
                    <label htmlFor="Title" className="text-lg font-medium text-green-900 self-start tracking-wide">Desc</label>
                    <textarea type="text" onChange={(e) => setDesc(e.target.value)} placeholder="Deskripsi" className="w-2/3 bg-green-200 px-3 py-1 rounded-md ring-green-300  focus:outline-none focus:bg-white focus:shadow-md focus:ring-2"/>
                </div>

                {/* Price */}
                <div className="mt-2 flex justify-between items-center">
                    <h1 className="text-lg font-medium text-green-900 self-start tracking-wide">Harga</h1>
                    <div onClick={AddInput} className="px-2 py-1 bg-green-200 text-green-800 hover:bg-green-600 hover:text-green-50 rounded-md cursor-pointer">Tambah</div>
                </div>
                {
                    inputFields.map((value, index) => {
                        return (
                            <div className="mt-2 flex justify-between items-center">
                                <div className="font-medium flex items-center w-full justify-start">
                                    <input type="text" value={value.Size} onChange={event => handleInputChange(index,event)} name="Size" placeholder="gram" className="w-1/2 bg-green-200 px-3 py-1 rounded-md ring-green-300  focus:outline-none focus:bg-white focus:shadow-md focus:ring-2"/>
                                </div>
                                <div className="font-medium flex items-center w-full justify-end">
                                    Rp.
                                    <input type="text" value={value.Price} onChange={event => handleInputChange(index,event)} name="Price" placeholder="Harga" className="ml-2 w-2/3 bg-green-200 px-3 py-1 rounded-md ring-green-300  focus:outline-none focus:bg-white focus:shadow-md focus:ring-2 text-right"/>
                                </div>
                                <div className="ml-2 flex items-center justify-center w-10 h-5 rounded-full bg-green-400 text-green-50  cursor-pointer hover:bg-green-500" onClick={() => RemoveInput(index)}>
                                    x
                                </div>
                            </div>
                        )
                    })
                }
                {/* image */}
                <div className="mt-2">
                    <h1 className="text-lg font-medium text-green-900 self-start tracking-wide">Upload Image</h1>
					<div className="img-holder">
                        Image
                        {
                            userInfo.filepreview !== null ? 
                                <img className="previewimg"  src={userInfo.filepreview} alt="UploadImage" />
                            : null
                        }
					</div>
                    <img src="" alt=""/>
                    <input type="file" accept="image/*" className="form-control" name="upload_file" onChange={handleImageChange} className="mt-4 px-2 py-1 w-1/2 self-center bg-green-200 text-green-800 hover:bg-green-600 hover:text-green-50 rounded-md cursor-pointer"/>
                </div>
                <input type="submit" value="Simpan" onSubmit={e => handleSubmit(e)}  className="mt-4 px-2 py-1 w-1/2 self-center bg-green-200 text-green-800 hover:bg-green-600 hover:text-green-50 rounded-md cursor-pointer"/>
            </form>
        </div>
        

    )
}

export default Form;