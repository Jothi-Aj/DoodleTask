  
import React, { Component } from 'react';
import {  Platform, StyleSheet, Text, View,  TouchableOpacity,  NativeModules,  FlatList, Alert, Image, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'; 
import { groupBy, isEmpty } from 'lodash';
import { getDetails } from '../../actions/readAction'; 
import { deleteDetail } from '../../actions/deleteAction'; 
import { getAllDetailsState } from '../../selectors';
import {config} from './../../theme/config';
import CollapseView from './collapseNew';
import { styles } from './style';

const { height } = Dimensions.get('window').height;

class FirstScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
        isList: false
    };
    this.buttonClick = this.buttonClick.bind(this);
    this.editTapped = this.editTapped.bind(this);
    this.deleteTapped = this.deleteTapped.bind(this);
  }
  componentDidMount() {
    this.props.getDetails();
  }
  buttonClick() {
    Actions.SecondScreen();
  }
  isLinkTapped = () => {
    this.setState({isList: !this.state.isList})
  }

  displayTapped(item) {
    Alert.alert(
      '',
      'Choose one',
      [
        {text: 'Edit', onPress: this.editTapped.bind(this, item)},
        {text: 'Delete', onPress: this.deleteTapped.bind(this, item)},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  }
  editTapped(item) {
    Actions.SecondScreen({detail: item, edit: true, title:"Update your details", id: item.id});
  }
  deleteTapped(item) {
    console.log(item)
    this.props.deleteDetail(item.id);
    this.props.getDetails();
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
                  <Image source={require('../../assets/img/delete.png')} style={{width: 40, height: 40}} resizeMode='cover'/>
                </TouchableOpacity>
              </View>
            </View>
        </TouchableOpacity>
    );
    
  render() {
    const { entries, isList } = this.state;
    const { details } = this.props;
    let newArray = groupBy(details, 'mobile');
    const dataArray = [];
    Object.keys(newArray).map(el => {
      dataArray.push({title: el, content: newArray[el]})
    });

    return (
      <View style={styles.container}>
          <View style={styles.topView}>
             <TouchableOpacity  onPress={this.isLinkTapped} style={{width:40, height: 40,alignItems:'center', justifyContent: 'center', right: 20}}>
                  <Image source={require('../../assets/img/linkIcon.png')} style={{width: 26, height: 26}} resizeMode='cover'/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.buttonClick} style={{width:40, height: 40,alignItems:'center', justifyContent: 'center', right: 10}}>
                  <Image source={require('../../assets/img/addIcon.png')} style={{width: 26, height: 26}} resizeMode='cover'/>
              </TouchableOpacity>
          </View>
          { isEmpty(details) && <View style={{top: height/2}}>
            <Text style={styles.welcome}>No contents</Text>
          </View> }
          {isList && <View style={{top: 10}}>
              <FlatList
                horizontal={false} 
                data={details}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
          </View>}
          {!isList && !isEmpty(details) && <CollapseView data={dataArray} deleteTapped={this.deleteTapped}/> }
      </View>
    );
  }
}



function mapStateToProps(state, props) {
    return {
        details: getAllDetailsState(state, props),
    }
}

export default connect(mapStateToProps, {getDetails, deleteDetail})(FirstScreen);
