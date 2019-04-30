import { UPDATE_DETAILS } from './types';

import {AsyncStorage} from "react-native";
import {  getIndex } from './../helpers';


export const setUpdateDetails = (detail)  => ({
  type: UPDATE_DETAILS,
  detail
});

export const updateDetails = (detail) => dispatch => {
    AsyncStorage.getItem('userDetails', (err, details) => {
        if (details !== null){
            details = JSON.parse(details);
            var index = getIndex(details, detail.id); //find the index of the detail with the id passed
            if (index !== -1) {
                details[index]['name'] = detail.name;
                details[index]['age'] = detail.age
                details[index]['mobile'] = detail.mobile;
            }
            AsyncStorage.setItem('userDetails', JSON.stringify(details), () => {
                dispatch(setUpdateDetails(detail));
            });
        }
    });
};