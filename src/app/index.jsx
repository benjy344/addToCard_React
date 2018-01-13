import React 	                         from 'react'
import ReactDom                          from 'react-dom'
import { Provider }                      from 'react-redux'
import { combineReducers, createStore }  from 'redux'
import { AppContainer }                  from 'react-hot-loader'

import App 		                         from './components/App'
import { products }                      from './reducers/products'
import { card }                          from './reducers/card'


const reducers = combineReducers({
    products,
    card
})

let store = createStore(reducers)

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