import React from 'react'

export default props => {
  const { state } = props
  return (
    <div className="controllers">
      {state.bundleExists ? (
        <button
          type="button"
          onClick={() => props.handleOnEdit(state.bundleBuildNumber)}
          className="btn btn-lg btn-link"
          disabled={state.bundleInvalid || state.bundleEditing}
        >
          Edit
        </button>
      ) : (
        <button
          type="button"
          onClick={() => props.handleOnCreate(state.inputBundleValue)}
          className="btn btn-lg btn-link"
          disabled={state.bundleInvalid || state.bundleEditing}
        >
          Create
        </button>
      )}
      <button
        type="button"
        onClick={() => props.handleOnBump(state.inputBundleValue)}
        className="btn btn-lg btn-warning"
        disabled={state.bundleInvalid}
      >
        Bump
      </button>
    </div>
  )
}
