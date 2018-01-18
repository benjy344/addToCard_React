import React     from 'react'
import PropTypes from 'prop-types'

import Store         from '../generalStore/Store'
import ProductAction from '../generalStore/Store'
import { addToCart } from '../actions/cart'

class Product extends React.Component {


	constructor(props) {
		super(props)
		this.state = {
			available: this.props.product.available
		}
	}

	addToCart() {
		Store.dispatch( addToCart(this.props.product) )
	}

  	render() {
	    return (
	      <div className={"product"+(this.state.available? " " : " unavailable")}>
	      	<img src={this.props.product.img}/>
	      	<h3>{this.props.product.name}</h3>
	      	<p>{this.props.product.details}</p>
	      	<span className="price" >${this.props.product.price}</span>
	      	<footer>
		      	<div className="product_likes">
		      		<p>{this.props.product.like} <button className="fa fa-heart-o heart"></button></p>
				</div>
	      		<button onClick={this.addToCart.bind(this)} disabled={!this.state.available} >Add to cart</button>
	      	</footer>

	      </div>
	    )
  	}

}

Product.propTypes = {
    product: PropTypes.object,
}


export default Product