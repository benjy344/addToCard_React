import React from 'react'

class Card extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <aside className="aside-nav">
          <a href="#" className="fa fa-home"></a>
          <a href="#" className="fa fa-shopping-basket"></a>
          <a href="#" className="fa fa-search"></a>
          <a href="#" className="fa fa-sign-in"></a>

          <div className="cart-container empty">
            <a href="#0" className="cart-trigger">
              Cart
              <ul className="count">
                <li>0</li>
                <li>0</li>
              </ul>
            </a>

            <div className="cart">
              <div className="wrapper">
                <header>
                  <h2>Cart</h2>
                  <span className="undo">Item removed. <a href="#0">Undo</a></span>
                </header>

                <div className="body">
                  <ul>
                  </ul>
                </div>

                <footer>
                  <a href="#0" className="checkout btn"><em>Checkout - $<span>0</span></em></a>
                </footer>
              </div>
            </div>
          </div>
        </aside>
      )
  }

}

export default Card