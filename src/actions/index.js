import TYPES from './types'
import axios from 'axios'

const apiUrl = process.env.API_URL
const headers = {
  Accept: 'application/json'
}

export const typeBundleIdentifier = value => {
  return {
    type: TYPES.BUNDLE_INPUT,
    value
  }
}
export const bundleIdentifierUnset = ({ error = false, errorMsg = '' }) => {
  return {
    type: TYPES.BUNDLE_UNSET,
    error,
    errorMsg
  }
}
const readBundle = ({
  error = false,
  errorMsg = '',
  invalid = false,
  loaded = true,
  exists = false,
  editing = false,
  id = null,
  buildNumber = null
}) => {
  return {
    type: TYPES.BUNDLE_READ,
    error,
    errorMsg,
    invalid,
    loaded,
    exists,
    editing,
    id,
    buildNumber
  }
}
export const getBundleIdentifier = ({ bundleId }) => {
  return dispatch => {
    return axios({
      method: 'get',
      url: [apiUrl, '/read?bundle_id=', bundleId].join(''),
      headers
    })
      .then(response => {
        dispatch(
          readBundle({
            errorMsg:
              response.status == 204 // Not Found
                ? 'Bundle identity not found, Bump or edit to set a build number.'
                : '',
            error: response.status == 204, // Not found
            invalid: false,
            loaded: response.status == 200, // if the bundle exists
            exists: response.status == 200, // if the bundle exists
            editing: false,
            id: response.data ? response.data.bundleId : '',
            buildNumber: response.data ? response.data.buildNumber : ''
          })
        )
      })
      .catch(error => {
        dispatch(
          readBundle({
            errorMsg: 'Error: ' + error,
            error: true,
            invalid: true,
            loaded: false,
            exists: false,
            editing: false,
            id: '',
            buildNumber: null
          })
        )
      })
  }
}

const bumpBundle = payload => {
  return {
    type: TYPES.BUMP_BUNDLE,
    invalid: payload.invalid,
    loaded: payload.loaded,
    editing: false,
    id: payload.id,
    buildNumber: payload.buildNumber
  }
}
export const postBumpBundle = ({ bundleId }) => {
  return dispatch => {
    return axios({
      method: 'post',
      url: [apiUrl, '/bump?bundle_id=', bundleId].join(''),
      headers
    })
      .then(response => {
        dispatch(
          bumpBundle({
            invalid: false,
            loaded: true,
            id: response.data ? response.data.bundleId : '',
            buildNumber: response.data ? response.data.buildNumber : ''
          })
        )
      })
      .catch(error => {
        dispatch(
          bumpBundle({
            invalid: true,
            loaded: false,
            id: null,
            buildNumber: null
          })
        )
      })
  }
}

const setBuildNumber = payload => {
  return {
    type: TYPES.SET_BUILD_NUMBER,
    inputBundleError: payload.inputBundleError,
    inputBundleErrorMsg: payload.inputBundleErrorMsg,
    exists: payload.exists,
    invalid: payload.invalid,
    loaded: payload.loaded,
    editing: false,
    id: payload.id,
    buildNumber: payload.buildNumber
  }
}
export const postSetBuildNumber = ({ bundleId, newBuildNumber = 0 }) => {
  return dispatch => {
    return axios({
      method: 'post',
      url: [apiUrl, '/set?bundle_id=', bundleId, '&new_build_number=', newBuildNumber].join(''),
      headers
    })
      .then(response => {
        dispatch(
          setBuildNumber({
            inputBundleError: false,
            inputBundleErrorMsg: '',
            exists: true,
            invalid: false,
            loaded: true,
            id: response.data ? response.data.bundleId : '',
            buildNumber: response.data ? response.data.buildNumber : ''
          })
        )
      })
      .catch(error => {
        dispatch(
          bumpBundle({
            inputBundleError: true,
            inputBundleErrorMsg: error,
            exists: false,
            invalid: true,
            loaded: false,
            id: null,
            buildNumber: null
          })
        )
      })
  }
}

export const EditBuildNumber = ({ editing = false, value = 0 }) => {
  return {
    type: TYPES.BUNDLE_EDITING,
    editing,
    value
  }
}
export const typeBuildNumber = value => {
  return {
    type: TYPES.BUILD_NUMBER_INPUT,
    value
  }
}
