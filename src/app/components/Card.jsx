import React from 'react'

class Card extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <span>{this.props.card.totalPrice}</span>
      </div>
    )
  }

}

export default Card