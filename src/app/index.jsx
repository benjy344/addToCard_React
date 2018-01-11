import React 	        from 'react'
import ReactDom         from 'react-dom'
import { Provider }     from 'react-redux'
import { createStore }  from 'redux'
import { AppContainer } from 'react-hot-loader'

import App 		        from './components/App'
import { products }     from './reducers/products'

let store = createStore(products)

const renderApp = () => {
	ReactDom.render(
		<AppContainer>
			<Provider store={store}>
				<App />
			</Provider>
		</AppContainer>,
		document.getElementById('app')
	)
}

if (module.hot) {
  module.hot.accept('./components/App', renderApp)
}

renderApp()