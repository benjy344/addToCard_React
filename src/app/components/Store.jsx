import React       from 'react'
import Product     from './Product'

class StoreComponent extends React.Component {

  render() {
    return (
      <div className="store">
        {this.props.items.map((data, index) => (
            <Product key={index} id={index} product={data} />
        ))}
      </div>
    )
  }

}

export default StoreComponent