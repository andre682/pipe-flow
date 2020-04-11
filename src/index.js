import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../public/style.css'

const jsx = (
    <App />
)
const wrapper = document.getElementById('app')

ReactDOM.render(jsx, wrapper)

// https://react.rocks/example/Guesstimate