import { GET_TABLE_TABS, GET_TABLE_HEADER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case GET_TABLE_TABS:
      return action.payload;
    case GET_TABLE_HEADER:
      return action.payload;
  }

  return state;
}
