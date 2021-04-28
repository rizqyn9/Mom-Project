import React, {Fragment} from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch, useParams} from 'react-router-dom'

import Header from './components/Header';
import Catalogue from './Pages/Catalogue';
import ProductDetails from './Pages/ProductDetails'
import AddProduct from './Pages/AddProduct';


function App() {
	return (
		<Router>
			<Route exact path="/" ><Redirect to="/catalogue"/> </Route>
				<Route exact path="/catalogue">
					<Header/>
					<Catalogue />
				</Route>
				<Route exact path="/admin">
					<Header admin={true}/>
					<Catalogue admin={true}/>
				</Route>
				<Route exact path="/product/:id">
					<Header/>
					<ProductDetails/>
				</Route>
				<Route exact path="/admin/create">
					<Header/>
					<AddProduct />
				</Route>
		</Router>
	);
}

export default App;
