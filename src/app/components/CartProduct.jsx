import React     from 'react'
import PropTypes from 'prop-types'

import Store            from '../generalStore/Store'
import { removeToCart } from '../actions/cart'
import { updateProducts } from '../actions/products'

class CartProduct extends React.Component {


	constructor(props) {
		super(props)
		this.state = {
			deleted: false
		}
	}
	removeToCart(index) {
		this.setState({
            deleted: true
        })
        Store.dispatch(removeToCart(index))
        Store.dispatch(updateProducts(this.props.product))
	}

  	render() {
	    return (
	    	<li className={"product "}>
	    	  <div className="product-image">
	    	    <a href="#0">
	    	      <img src={this.props.product.img} alt="placeholder" />
	    	    </a>
	    	  </div>
	    	  <div className="product-details">
	    	    <h3><a href="#0">{this.props.product.name}</a></h3>
	    	    <span className="price">${this.props.product.price}</span>
	    	    <div className="actions">
	    	      <a href="#0" className="delete-item" onClick={this.removeToCart.bind(this, this.props.id)}>Delete</a>
	    	    </div>
	    	  </div>
	    	</li>
	    )
  	}
}

CartProduct.propTypes = {
    product: PropTypes.object
}

CartProduct.defaultProps = {
    product: {}
}

export default CartProduct