import React from 'react'
import { connect } from 'react-redux'
import { useDrop } from 'react-dnd'
import SlotUI from '../presentational/Slot.jsx'
import { dropTool, hoverTool } from '../../actions'

export const Slot = props => <SlotUI {...props} />

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleDrop: value => {
      dispatch(dropTool(value))
    },
    handleHover: value => {
      dispatch(hoverTool(value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Slot)
