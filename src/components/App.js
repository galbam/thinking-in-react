import React from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'
import Books from './Books';
import About from './About';
import Footer from './Footer';
import NavBar from './NavBar';

class App extends React.Component {

  state = {
    menu: { open: false }
  }

  toggleMenu = () => {
    this.setState(state => ({
      menu: { open: !state.menu.open }
    }))
  }
//react.memo
//shallow
  render() {

    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={this.state.menu.open}
          toggleMenu={this.toggleMenu}
        />

        <NavBar toggleMenu={this.toggleMenu} />
        <Header title="ReactJS Academy" />
        <Books />
        <About />
        <Footer />
      </div>
    )
  }
}

export default App
