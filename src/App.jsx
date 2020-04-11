import React, { Component } from 'react'
import Header from './components/presentational/Header.jsx'
import Container from './components/presentational/Container.jsx'
import storeFactory from './store'
import { Provider } from 'react-redux'

const store = storeFactory()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Container />
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
