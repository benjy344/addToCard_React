import React   from 'react'
import Product from './Product'

class Store extends React.Component {


  onAddProduct(_props) {
    let product = _props.product
    product.available = false
    this.props.onAddProductCallback(product)
  }

  render() {
    return (
      <div className="store">
        {this.props.items.map((data, index) => (
            <Product key={index} id={index} product={data} onAddProductCallback={this.onAddProduct.bind(this)} />
        ))}
      </div>
    )
  }

}

export default Store