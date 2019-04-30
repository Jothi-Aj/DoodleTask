    
import React, { Component } from 'react';
import {  Platform, StyleSheet, Text, View, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { updateDetails } from '../../actions/updateAction';
import { addDetails } from '../../actions/createAction';
import TextInput from '../common/FormElements/input';
import { styles } from './style';
import { generateID, getIndex } from './../../helpers';

class SecondScreen extends Component<Props> {
  constructor(props) {
    super(props);
  
    this.state = {
      id:  0,
      productName: (Actions.currentParams.edit) ? Actions.currentParams.detail.name:'',
      price: (Actions.currentParams.edit) ? Actions.currentParams.detail.age:'',
      category: (Actions.currentParams.edit) ? Actions.currentParams.detail.mobile:'',
      title: (Actions.currentParams.edit) ? Actions.currentParams.title: 'Add Product Details',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { name, age, mobile } = this.state; 
  }


  handleSubmit(){
    const { id, productName, price, category } = this.state;
    const { details } = this.props;
    
       if (Actions.currentParams.edit){
        let index = getIndex(details, Actions.currentParams.detail.id);
            let detail = details[index];
            detail['name'] = productName;
            detail['age'] = price;
            detail['mobile'] = category;
            this.props.updateDetails(detail);
        }else{
            let id = generateID();
            let detail = {"id": id, "name": productName, "age": price, "mobile": category};
            this.props.addDetails(detail);
        }

        Actions.pop();
  }

  backTapped = () => {
    Actions.pop()
  }

  render() {
    const { productName, price, category, title } = this.state;
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={this.backTapped} style={{width:40, height: 40, position: 'absolute', left: 30, top: 20}}>
          <Image source={require('../../assets/img/backarrow.png')} style={{width: 26, height: 26}} resizeMode='cover'/>
      </TouchableOpacity>
       <Text style={{marginTop: 50, color: '#990099', fontSize: 20}}>{title}</Text> 
        <View style={{width:'80%', marginTop:20}}>
          <TextInput 
              label=' Product name'
              name='name'
              value={productName}
              onChange={(value) => this.setState({productName: value})}
              />
          <TextInput 
              label='Price'
              name='age'
              value={price}
              onChange={(value) => this.setState({price: value})} />
          <TextInput 
              label='Merchant Type' 
              name='mobile'
              value={category}
              onChange={(value) => this.setState({category: value})} />
        </View>
        <TouchableOpacity style={styles.saveButton}
                          onPress={this.handleSubmit}>
            <Text style={{color: '#990099', fontSize: 20}}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


function mapStateToProps(state, props) {
  console.log(state);
    return {
        details: state.dataReducer.details,
    }
}

export default connect(mapStateToProps, {addDetails, updateDetails})(SecondScreen);
