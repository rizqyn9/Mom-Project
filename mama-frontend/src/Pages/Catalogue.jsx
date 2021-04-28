import React, {Fragment} from 'react'
import axios from 'axios'

import ProductList from '../components/ProductList'
import Search from '../components/Search'
import api from '../services/api' 


const Catalogue = (props) => {
  const {admin} = props
  const get = () => {
      axios.get('http://localhost:3005/catalogue').then(el => {
        console.log(el);
    })
  }
  // api.get('/').then(el => {
    //   console.log(el);
    // })
  // get()
    return (
		<Fragment>
      <div className="lg:px-24 pb-20 md:px-15 sm:px-12 text-green-800">
            <div className="flex flex-col sm:flex-row justify-between mr-3 mb-4 items-center sm:px-24">
              <div className="font-bold lg:text-3xl mb-5 text-3xl" onClick={get}>Katalog harga</div>
              <Search />
            </div>
            { admin
            ? <ProductList admin={true}/>
            : <ProductList />
            }
      </div>
		</Fragment>
    )
}

export default Catalogue