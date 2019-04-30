import { ADD_DETAILS } from './types';

import {AsyncStorage} from "react-native";

export const setAddDetails = (detail)  => ({
  type: ADD_DETAILS,
  detail
});

export const addDetails = (detail) => dispatch => {
    console.log(detail);
 	AsyncStorage.getItem('userDetails', (err, details) => {
        if (details !== null){
            details = JSON.parse(details);
            details.unshift(detail); //add the new detail to the top
            AsyncStorage.setItem('userDetails', JSON.stringify(details), () => {
                dispatch({type: ADD_DETAILS, detail:detail});
            });
        } else {
            details = JSON.parse(details);
            details = [detail];
            AsyncStorage.setItem('userDetails', JSON.stringify(details), () => {
                dispatch(setAddDetails(detail));
            });
        }
    });
};