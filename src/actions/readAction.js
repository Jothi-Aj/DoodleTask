import { SHOW_DETAILS } from './types';

import {AsyncStorage} from "react-native";

export const setGetDetails = (details)  => ({
  type: SHOW_DETAILS,
  details
});

export const getDetails = () => dispatch => {
 	AsyncStorage.getItem('userDetails', (err, details) => {
            if (details !== null){
                dispatch(setGetDetails(JSON.parse(details)));
            }
    });
};