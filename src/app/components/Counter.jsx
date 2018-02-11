import React from 'react'

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			counter: this.props.start
		}
	}
	increment() {
		this.setState({
			counter: this.state.counter + this.props.increment
		})
	}

    render() {
        return (
            <div className="counter">
            	<span>{this.state.counter}</span>
            	<button onClick={this.increment.bind(this)} >+{this.props.increment}</button>
            </div>
          )
    }

}

export default App