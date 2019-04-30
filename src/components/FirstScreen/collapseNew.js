import React, { Component } from 'react';
import { StyleSheet,  View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { PropTypes } from 'prop-types';
import Accordion from 'react-native-collapsible/Accordion';
import { styles } from './style';

class CollapseNew extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	activeSections: []
	  };
	}

	_renderHeader = (section) => {
    	return( 
    		<View style={styles.headerView}>
    			<Text style={{fontSize:24, color: '#990099'}}>{section.title}</Text>
    		</View>
    	);
    }

	_renderContent = (section) => {
    	return( 
    		<View>
              <FlatList
                horizontal={false} 
                data={section.content}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
    	);
    }

    _keyExtractor = (item, index) => item.id;
    _renderItem = ({item, index}) => (
        <TouchableOpacity
            style={styles.slideRow}
            activeOpacity={1}
            key={index}>
            <View style={styles.productData}>
              <View>
                <Text style={[styles.slideText,{ fontSize: 24}]}>{item.name}</Text>
                <Text style={styles.slideText}>Price: {item.age}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={this.deleteTapped.bind(this, item)} style={{width:50, height: 50,alignItems:'center', justifyContent: 'center', right: 20}}>
                  <Image source={require('../../assets/img/delete.png')} style={{width: 30, height: 30}} resizeMode='cover'/>
                </TouchableOpacity>
              </View>
            </View>
        </TouchableOpacity>
    );

	_updateSections = (activeSections) => {
	    this.setState({activeSections})
	}

	deleteTapped = (item) => {
		this.props.deleteTapped(item)
	}


  	render() {
  		console.log('data', this.props.data)
    return (
	      	<View style={{flex:1, top: 10, backgroundColor: 'white'}}>
				<Accordion
					sections={this.props.data}
					renderSections={this._renderHeader}
			        activeSections={this.state.activeSections}
				    renderHeader={this._renderHeader}
				    renderContent={this._renderContent}
				    onChange={this._updateSections}
			      />
			</View>
	    );
  	}
}

CollapseNew.propTypes = {
	data: PropTypes.any
}

export default CollapseNew;