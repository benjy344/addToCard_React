import React       from 'react'
import PropTypes   from 'prop-types'
import { connect } from 'react-redux'
//import _           from 'underscore'

import Header      from './Header'
import Card        from './Card'
import Store       from './Store'
import Footer      from './Footer'

// ACTIONS
import { fetchProducts, addProduct, removeProduct } from '../actions/products'
import { addToCard, removeToCard } from '../actions/card'

// REDUCER
import { PRODUCTS_NOT_LOADED, PRODUCTS_LOADING, PRODUCTS_LOADED } from '../reducers/products'

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

    onAddProduct(items, product) {
        console.log('onAddProduct -- _props', items, product)

        this.props.addProduct(items)
        //this.props.addToCard(product)
    }

    render() {
        console.log('render app')
        return (
            <div>
                <Header />
                <Card card={this.props.card}/>
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
    card:          PropTypes.array,
    fetchProducts: PropTypes.func,
    addProduct:    PropTypes.func,
    removeProduct: PropTypes.func,
    addToCard:     PropTypes.func,
    removeToCard:  PropTypes.func
}

App.defaultProps = {
    itemLoadState: PRODUCTS_NOT_LOADED,
    itemCount: 0,
    items: [],
    card: []
}

const mapStateToProps = (state, ownProps) => {
    console.log('mapStateToProps', state, ownProps)
    return {
        itemLoadState: state.itemLoadState,
        itemCount: state.itemCount,
        items: state.items,
        card: state.card,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: fetchProducts.bind(null, dispatch),
        addProduct:    addProduct.bind(null, dispatch),
        removeProduct: removeProduct.bind(null, dispatch),
        addToCard:     addToCard.bind(null, dispatch),
        removeToCard:  removeToCard.bind(null, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)