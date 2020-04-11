import React from 'react'
import BundleField from '../container/BundleField'
import BundleControllers from '../container/BundleControllers'
import BuildNumber from '../container/BuildNumber'

export default () => {
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="col-md-8 offset-md-2">
            <BundleField />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 offset-md-5">
            <BundleControllers />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12">
            <BuildNumber />
          </div>
        </div>
      </form>
    </div>
  )
}
