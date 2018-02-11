import React          from 'react'

import Header         from './Header'
import StoreComponent from './Store'
import Cart           from './Cart'
import Footer         from './Footer'

const inventory       = require('../../public/contrib/products.json')

// CSS
import '../scss/main'

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Cart items={inventory.items} totalPrice={230} />
                <StoreComponent items={inventory.items} />
                <Footer />
            </div>
          )
    }

}

export default App