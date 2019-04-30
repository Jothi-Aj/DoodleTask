import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import FirstScreen from '../../routes/FirstScreen';
import SecondScreen from '../../routes/SecondScreen';

class Home extends Component {
	
	render(){
		return (
			<View style={{flex:1}}>
				<Router sceneStyle={{shadowOpacity: 0}}>
	        		<Stack key='root' hideNavBar={true} panHandlers={null} swipeEnabled={false}>
	        		    <scene key='FirstScreen' component={FirstScreen} initial/>
	        			<Scene key='SecondScreen' component={SecondScreen} />
					</Stack>
				</Router>
			</View>
		);
	}
}

export default Home;