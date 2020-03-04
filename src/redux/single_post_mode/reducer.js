import { SWITCH_MODE } from './constants.js';
import {
  GOT_EDITED_POST,
  GOT_NEW_POST,
  REMOVE_POST,
} from '../all_posts/constants.js';

const modes = { VIEW: 'VIEW', EDIT: 'EDIT', CREATE: 'CREATE' };
const initialState = 'VIEW';

export const singlePostModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_MODE:
      if (modes[action.payload]) return action.payload;
      return modes.VIEW;
    case GOT_EDITED_POST:
      return modes.VIEW;
    case GOT_NEW_POST:
      return modes.VIEW;
    case REMOVE_POST:
      return modes.VIEW;
    default:
      return state;
  }
};
