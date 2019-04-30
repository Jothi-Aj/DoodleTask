import { StyleSheet } from 'react-native';
import {config} from '../../theme/config';

export const styles = StyleSheet.create({

  container: {
        flex:1,
        backgroundColor: '#F5FCFF',
        width: '100%'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ff8000',
    },
    topView: {
      height:44, 
      left: 0,
      right: 0,
      backgroundColor: '#ffffff', 
      width:'100%', 
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding:10,
    },
    buttonText : {
        color : '#ff8000',
        textAlign:'center',
        fontWeight: 'bold',
    },
     slideRow: {
        flexDirection: 'column',
        justifyContent: 'space-between', 
        flexWrap: 'nowrap', 
        position:'relative',
        paddingHorizontal: 10
    },
    slideText: {
      color: '#990099'
    },
    productData: {
      height:100, 
      backgroundColor: '#F5F5F5', 
      justifyContent:'space-between', 
      borderBottomWidth:2, 
      borderBottomColor: 'white', 
      padding: 10, 
      flexDirection: 'row',
      alignItems: 'center',
    }, 
    headerView : {
      height: 60, 
      backgroundColor: '#F5F5F5',
      justifyContent: 'center', 
      alignItems: 'flex-start', 
      padding: 10,
      borderBottomWidth: 10, 
      borderBottomColor: 'white', 
      marginHorizontal: 10
    }
});