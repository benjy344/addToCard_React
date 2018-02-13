import React from 'react'

class Counter extends React.Component {

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
	decrement() {
		this.setState({
			counter: ((this.state.counter - this.props.increment) < 0 ? 0 : this.state.counter - this.props.increment)
		})
	}

    render() {
        return (
            <div className="counter">
            	<h1>{this.state.counter}</h1>
            	<button onClick={this.increment.bind(this)} >+{this.props.increment}</button>
            	<button onClick={this.decrement.bind(this)} >-{this.props.increment}</button>
            </div>
          )
    }

}

export default Counter