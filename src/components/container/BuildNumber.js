import React from 'react'
import { connect } from 'react-redux'
import BuildNumberUI from '../presentational/BuildNumber.jsx'
import { typeBuildNumber, postSetBuildNumber } from '../../actions'

export const BuildNumber = props => <BuildNumberUI {...props} />

const mapStateToProps = state => {
  return {
    state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleOnChange: value => {
      dispatch(typeBuildNumber(value))
    },
    handleOnUpdate: (bundleId, buildNumber) => {
      postSetBuildNumber({ bundleId, newBuildNumber: buildNumber })(dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BuildNumber)
