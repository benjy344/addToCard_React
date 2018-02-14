import React       from 'react'
import PropTypes   from 'prop-types'
import { connect } from 'react-redux'

import Header      from './Header'
import Cart        from './Cart'
import StoreComponent       from './Store'
import Footer      from './Footer'

// ACTIONS
import { fetchProducts } from '../actions/products'

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
    onRemoveProduct(index) {
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
        return (
            <div>
                {this.displayLoader()}
                <Header />
                <Cart/>
                <StoreComponent/>
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
}

App.defaultProps = {
    itemLoadState: PRODUCTS_NOT_LOADED,
    itemCount: 0,
    items: [],
    cart: []
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemLoadState: state.products.itemLoadState,
        itemCount: state.products.itemCount,
        items: state.products.items,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: fetchProducts.bind(null, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)