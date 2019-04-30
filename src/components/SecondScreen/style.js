import { StyleSheet } from 'react-native';
import {config} from '../../theme/config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  saveButton: {
    width: '80%', 
    position: 'absolute', 
    height: 40, 
    bottom: 50, 
    backgroundColor:'white', 
    alignItems: 'center', 
    borderRadius: 15, 
    justifyContent: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
