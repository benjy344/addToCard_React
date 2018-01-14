import React from 'react'

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  onToggle() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    return (
      <header>
        {/*<a href="#"><img src="http://via.placeholder.com/200x60/EF3435"/></a>*/}
        <button className={"hamburger"+(this.state.menuOpen?' is-active':'')} type="button" aria-label="Menu" aria-controls="navigation" onClick={this.onToggle.bind(this)}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <nav className={(this.state.menuOpen?'open':'')}>
          <div className="menu-slider__content">
            <ul className="menu-items">
              <li className='item-1'><a href="#">LIVING ROOM</a></li>
              <li className='item-2'><a href="#">OFFICE</a></li>
              <li className='item-3'><a href="#">FOR KIDS</a></li>
              <li className='item-4'><a href="#">KITCHEN</a></li>
              <li className='item-5'><a href="#">ACCESORIES</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }

}

export default Header

