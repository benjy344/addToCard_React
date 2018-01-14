import React     from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {


	constructor(props) {
		super(props)
		this.state = {
			available: this.props.product.available
		}
	}

	addToCart() {
		this.setState({
            available: false
        })
		this.props.onAddProductCallback(this.props)
	}

  	render() {
	    return (
	      <div className={"product"+(this.state.available? " " : " unavailable")}>
	      	<img src={this.props.product.img}/>
	        <button onClick={this.addToCart.bind(this)} disabled={!this.state.available} >add to cart</button>
	      </div>
	    )
  	}

}

Product.propTypes = {
    product: PropTypes.object,
    onAddProductCallback: PropTypes.func
};

Product.defaultProps = {
    product: {}
};

export default Product;