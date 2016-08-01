import * as actions from '../actions/index';

export default function(state = {tabs: false, features: false, headers: false}, action) {
  switch (action.type) {
    case actions.GET_FEATURE_SETS:
      return {...state, features: true};
    case actions.GET_TABLE_HEADER:
      return {...state, headers: true};
    case actions.GET_TABLE_TABS:
      return {...state, tabs: true};
  }

  return state;
}
