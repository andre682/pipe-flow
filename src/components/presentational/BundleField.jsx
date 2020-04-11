import React from 'react'
export default props => {
  const { state } = props
  return (
    <div className="form-group">
      <label className="col-form-label-lg">Bundle Identifier</label>
      <input
        onChange={e => {
          props.handleOnChange(e.target.value)
        }}
        value={state.inputBundleValue}
        type="text"
        className={'form-control form-control-lg ' + (state.inputBundleError ? 'is-invalid' : '')}
        id="bundleId"
        placeholder="com.[COMPANY].[APP-NAME]"
      />
      <div className="invalid-feedback">{state.inputBundleErrorMsg}</div>
    </div>
  )
}
