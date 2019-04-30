
import {  DELETE_DETAILS } from "../actions/types";

import {  getIndex, cloneObject } from './../helpers';

export default (state = {details: []}, action = {}) => {
    switch (action.type) {
	    case DELETE_DETAILS:
	        let details =  cloneObject(state.details) //clone the current state
            details.unshift(action.detail); //add the new detail to the top
            state = Object.assign({}, state, { details: details});
            return state;
	    default:
	        return state;
    }
};

