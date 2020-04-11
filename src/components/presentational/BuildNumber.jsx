import React from 'react'

export default props => {
  const { state } = props
  return state.bundleLoaded ? (
    <p className="text-center result-text">
      Build Number:
      {state.bundleEditing ? (
        <span className="edit-fields">
          <input
            type="number"
            value={state.inputBuildNumberValue}
            className="build-number-field"
            min="0"
            onChange={e => {
              props.handleOnChange(e.target.value)
            }}
          />
          <button
            type="button"
            className="btn btn-lg btn-link"
            onClick={() =>
              props.handleOnUpdate(state.inputBundleValue, state.inputBuildNumberValue)
            }
            disabled={isNaN(state.inputBuildNumberValue) || state.inputBuildNumberValue.length == 0}
          >
            save
          </button>
        </span>
      ) : (
        <span>{state.bundleBuildNumber}</span>
      )}
    </p>
  ) : (
    <span></span>
  )
}
