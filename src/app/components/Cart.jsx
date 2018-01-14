import React        from 'react'
import CartProduct  from './CartProduct'

class Cart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cartOpen: false
    }
  }


  toggleCart() {
    this.setState({
      cartOpen: !this.state.cartOpen
    })
  }

  renderCount() {
    if(this.props.cart.items.length>0) {
      return <span className="count">{this.props.cart.items.length}</span>
    }
  }


  render() {
    return (
      <div>
        <aside className="aside-nav">
          <a href="#" className="fa fa-home"></a>
          <a href="#" className="fa fa-shopping-basket" onClick={this.toggleCart.bind(this)}>
            {this.renderCount()}
          </a>
          <a href="#" className="fa fa-search"></a>
          <a href="#" className="fa fa-sign-in"></a>
        </aside>
        <div className={"cart-container "+(this.state.cartOpen?'cart-open': '')}>
          <div className="cart">
            <div className="wrapper">
              <header>
                <h2>Cart</h2>
                <span className="undo">Item removed. <a href="#0">Undo</a></span>
              </header>

              <div className="body">
                <ul>
                  {this.props.cart.items.map((data, index) => (
                      <CartProduct key={index} id={index} product={data} onRemoveProductCallback={this.props.onRemoveProductCallback.bind(this)}/>
                  ))}
                </ul>
              </div>

              <footer>
                <a href="#0" className="checkout btn"><em>Checkout - $<span>{this.props.cart.totalPrice}</span></em></a>
              </footer>
            </div>
          </div>
        </div>
      </div>
      )
  }

}

export default Cart










