import React     from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {


	constructor(props) {
		super(props)
		this.state = {
			available: this.props.product.available
		}
	}

	addToCard() {
		this.setState({
            available: false
        })
		this.props.onAddProductCallback(this.props)
	}

  	render() {
	    return (
	      <div className={"product"+(this.state.available? " " : " unavailable")}>
	      	<img src={this.props.product.img}/>
	        <button onClick={this.addToCard.bind(this)} disabled={!this.state.available} >add to card</button>
	      </div>
	    )
  	}

}

Product.propTypes = {
    item: PropTypes.object,
    selectCallback: PropTypes.func
};

Product.defaultProps = {
    items: {},
    itemCount: 0
};

export default Product;