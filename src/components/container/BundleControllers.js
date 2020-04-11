import React from 'react'
import { connect } from 'react-redux'
import BundleControllersUI from '../presentational/BundleControllers.jsx'
import { EditBuildNumber, postBumpBundle, postSetBuildNumber } from '../../actions'

export const BundleControllers = props => <BundleControllersUI {...props} />

const mapStateToProps = state => {
  return {
    state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleOnBump: bundleId => {
      postBumpBundle({ bundleId })(dispatch)
    },
    handleOnEdit: value => {
      dispatch(EditBuildNumber({ editing: true, value }))
    },
    handleOnCreate: bundleId => {
      postSetBuildNumber({ bundleId })(dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BundleControllers)
