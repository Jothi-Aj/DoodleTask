import {  SHOW_DETAILS } from "../actions/types";

import {  cloneObject } from './../helpers';

export default (state = {details: []}, action = {}) => {
    switch (action.type) {
	    case SHOW_DETAILS:
	        state = Object.assign({}, state, { details: action.details, loading:false });
            return state
	    default:
	        return state;
    }
};

