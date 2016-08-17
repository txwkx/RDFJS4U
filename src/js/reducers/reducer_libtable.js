import { GET_TABLE_TABS, GET_TABLE_HEADER } from '../actions/index';

const INITIAL_STATE = {tabs: [], headers: [], content: []};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TABLE_TABS:
      return {...state, tabs: action.payload};
    case GET_TABLE_HEADER:
      return {...state, headers: action.payload};
  }

  return state;
}
