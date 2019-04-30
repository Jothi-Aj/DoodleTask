import { combineReducers } from 'redux';

import { SHOW_DETAILS, ADD_DETAILS, UPDATE_DETAILS, DELETE_DETAILS } from "../actions/types";
import {  getIndex, cloneObject } from './../helpers';

 //Import the actions types constant we defined in our actions

let dataState = { details: [], loading:true };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case ADD_DETAILS:{
            let details =  cloneObject(state.details) //clone the current state
            details.unshift(action.detail); //add the new detail to the top
            state = Object.assign({}, state, { details: details});
            return state;
        }

        case SHOW_DETAILS:
            state = Object.assign({}, state, { details: action.details, loading:false });
            return state;

        case UPDATE_DETAILS:{
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
        }

        case DELETE_DETAILS:{
            let details =  cloneObject(state.details) //clone the current state
            let index = getIndex(details, action.id); //find the index of the detail with the id passed
            if(index !== -1) details.splice(index, 1);//if yes, undo, remove the DETAIL
            state = Object.assign({}, state, { details: details});
            return state;
        }

        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer;