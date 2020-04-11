import TYPES from '../actions/types'
const defaultState = {
  slots: [10, 15],
  tools: []
}

export default function bundleReducer(state = defaultState, action) {
  switch (action.type) {
    case TYPES.DROP_TOOL:
      return {
        ...state,
        tools: [...state.tools, [action.row, action.column, action.tool]]
      }
    default:
      return state
  }
}
