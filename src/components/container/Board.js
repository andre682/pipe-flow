import React from 'react'
import { connect } from 'react-redux'
import BoardUI from '../presentational/Board.jsx'

export const Board = props => <BoardUI {...props} />

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Board)
