import React from 'react'
import { connect } from 'react-redux'
import BundleFieldUI from '../presentational/BundleField.jsx'
import { getBundleIdentifier, typeBundleIdentifier, bundleIdentifierUnset } from '../../actions'

export const BundleField = props => <BundleFieldUI {...props} />

const mapStateToProps = (state) => {
  return {
    state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleOnChange: value => {
      dispatch(typeBundleIdentifier(value))
      const bundleIdentifierRegExp = /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+[0-9a-z_]$/i
      if (value.length > 4) {
        if (RegExp(bundleIdentifierRegExp).test(value)) {
          getBundleIdentifier({ bundleId: value })(dispatch)
        } else {
          dispatch(bundleIdentifierUnset({ error: true, errorMsg: 'Invalid Bundle Identifier.' }))
        }
      } else {
        dispatch(bundleIdentifierUnset({}))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BundleField)
