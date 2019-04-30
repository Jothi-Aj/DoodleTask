import { DELETE_DETAILS } from './types';

import {AsyncStorage} from "react-native";
import {  getIndex } from './../helpers';

export const setDeleteDetail = (id)  => ({
  type: DELETE_DETAILS,
  id
});

export const deleteDetail = (id) => dispatch => {
    AsyncStorage.getItem('userDetails', (err, details) => {
            if (details !== null){
                details = JSON.parse(details);
                var index = getIndex(details, id); //find the index of the detail with the id passed
                if(index !== -1) details.splice(index, 1);//if yes, undo, remove the DETAIL
                AsyncStorage.setItem('userDetails', JSON.stringify(details), () => {
                    dispatch(setDeleteDetail(id));
                });
            }
        });
};