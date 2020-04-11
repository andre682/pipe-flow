import TYPES from '../actions/types'
const defaultState = {
  inputBundleError: false,
  inputBundleErrorMsg: '',
  inputBundleValue: undefined,

  inputBuildNumberError: false,
  inputBuildNumberErrorMsg: '',
  inputBuildNumberValue: undefined,

  bundleInvalid: true,
  bundleLoaded: false,
  bundleEditing: false,
  bundleExists: false,
  bundleId: '',
  bundleBuildNumber: '0'
}

export default function bundleReducer(state = defaultState, action) {
  switch (action.type) {
    case TYPES.BUNDLE_INPUT:
      return {
        ...state,
        inputBundleValue: action.value
      }
    case TYPES.BUNDLE_UNSET:
      return {
        ...state,
        inputBundleError: action.error,
        inputBundleErrorMsg: action.errorMsg,
        bundleInvalid: true,
        bundleLoaded: false,
        bundleEditing: false
      }
    case TYPES.BUNDLE_READ:
      return {
        ...state,
        inputBundleError: action.error,
        inputBundleErrorMsg: action.errorMsg,
        bundleInvalid: action.invalid,
        bundleLoaded: action.loaded,
        bundleEditing: action.editing,
        bundleExists: action.exists,
        bundleId: action.id,
        bundleBuildNumber: action.buildNumber
      }
    case TYPES.BUNDLE_EDITING:
      return {
        ...state,
        bundleEditing: action.editing,
        inputBuildNumberValue: action.value
      }
    case TYPES.BUILD_NUMBER_INPUT:
      return {
        ...state,
        inputBuildNumberValue: action.value
      }
    case TYPES.BUMP_BUNDLE:
      return {
        ...state,
        bundleInvalid: action.invalid,
        bundleLoaded: action.loaded,
        bundleEditing: action.editing,
        bundleId: action.id,
        bundleBuildNumber: action.buildNumber
      }

    case TYPES.SET_BUILD_NUMBER:
      return {
        ...state,
        inputBundleError: action.inputBundleError,
        bundleExists: action.exists,
        inputBuildNumberError: action.error,
        inputBuildNumberErrorMsg: action.errorMsg,
        bundleInvalid: action.invalid,
        bundleLoaded: action.loaded,
        bundleEditing: action.editing,
        bundleId: action.id,
        bundleBuildNumber: action.buildNumber
      }

    default:
      return state
  }
}
