import { StyleSheet, Dimensions} from 'react-native';
import {config} from '../../../theme/config';

export const styles = StyleSheet.create({
    input:{
        width: '100%',
        marginBottom:34,
    },
    inputText:{
        height:25,
        paddingBottom:7,
        fontSize: 14, 
        color: '#483D8B', 
        borderBottomWidth: 1, 
        borderBottomColor: config.formBorder,
    },
    label:{
        color:'#483D8B',
        fontSize: config.fsRegular,
        lineHeight:config.fsRegular,
    },
    lastChild: {
        marginBottom: 10
    }
});