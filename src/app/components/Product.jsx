import React     from 'react'


class Product extends React.Component {


	constructor(props) {
		super(props)
		this.state = {
			available: this.props.product.available
		}
	}

	addToCart() {
		//this.props.product.available = false
		this.setState({
			available: this.props.product.available
		})
		// Want to update the cart
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


export default Product