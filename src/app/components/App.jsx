import React       from 'react'
import PropTypes   from 'prop-types'
import { connect } from 'react-redux'

import Header      from './Header'
import Cart        from './Cart'
import Store       from './Store'
import Footer      from './Footer'

// ACTIONS
import { fetchProducts }            from '../actions/products'
import { addToCart, removeToCart }  from '../actions/cart'

// REDUCER
import { PRODUCTS_NOT_LOADED, PRODUCTS_LOADING, PRODUCTS_LOADED } from '../reducers/products'


// CSS
import '../scss/main'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        if (this.props.itemLoadState == PRODUCTS_NOT_LOADED) {
            this.props.fetchProducts()
        }
    }

    onAddProduct(product) {
        this.props.addToCart(product)
    }
    onRemoveProduct(index) {
        console.log('index -- ', index)
        this.props.removeToCart(index)
    }

    displayLoader() {
        if (this.props.itemLoadState == PRODUCTS_NOT_LOADED) {
            return (
                    <div className="loading">LOADING</div>
                )
        }
    }

    render() {
        console.log('render app')
        return (
            <div>
                {this.displayLoader()}
                <Header />
                <Cart cart={this.props.cart} onRemoveProductCallback={this.onRemoveProduct.bind(this)}/>
                <Store items={this.props.items} onAddProductCallback={this.onAddProduct.bind(this)}/>
                <Footer />
            </div>
          )
    }

}

App.propTypes = {
    itemLoadState: PropTypes.number,
    itemCount:     PropTypes.number,
    items:         PropTypes.array,
    cart:          PropTypes.object,
    fetchProducts: PropTypes.func,
    addToCart:     PropTypes.func,
    removeToCart:  PropTypes.func
}

App.defaultProps = {
    itemLoadState: PRODUCTS_NOT_LOADED,
    itemCount: 0,
    items: [],
    cart: []
}

const mapStateToProps = (state, ownProps) => {
    console.log('mapStateToProps', state, ownProps)
    return {
        itemLoadState: state.products.itemLoadState,
        itemCount: state.products.itemCount,
        items: state.products.items,
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: fetchProducts.bind(null, dispatch),
        addToCart:     addToCart.bind(null, dispatch),
        removeToCart:  removeToCart.bind(null, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)