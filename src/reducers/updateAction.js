import {  UPDATE_DETAILS } from "../actions/types";

import {  getIndex, cloneObject } from './../helpers';

export default (state = {details: []}, action = {}) => {
    switch (action.type) {
	    case UPDATE_DETAILS:
	        let detail = action.detail;
            let details =  cloneObject(state.details) //clone the current state
            let index = getIndex(details, detail.id); //find the index of the detail with the quote id passed
            if (index !== -1) {
                details[index]['name'] = detail.name;
                details[index]['age'] = detail.age;
                details[index]['mobile'] = detail.mobile;
            }
            state = Object.assign({}, state, { details: details});
            return state;
	    default:
	        return state;
    }
};

