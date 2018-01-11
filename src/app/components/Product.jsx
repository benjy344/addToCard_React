import React     from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {



  render() {
    return (
      <div className={"product"+(this.props.product.available? " " : " unavailable")}>
      	<img src={this.props.product.img}/>
        <button onClick={this.props.onAddProductCallback.bind(this, this.props)} disabled={!this.props.product.available} >add to card</button>
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