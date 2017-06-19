import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import {
  Animated,
  StyleSheet,
  View,
  Text,
  NavigationExperimental,
  TouchableHighlight
} from 'react-native';

import { add } from '../actions/cosmetics'
export class AppContainer extends Component {

	constructor(props) {
	  super(props);
	  //  this.state = {
	  // 	num:0,
	  // }
	}

	add(){
		this.props.add()
	}

  	render() {
	   return (
	      <View>
	      	<Text style={{marginTop:20}}>
	      		Count : {this.props.num}
	      	</Text>
	      	<TouchableHighlight onPress={()=>this.add()} >
	      	<Text>
	      		Add
	      	</Text>
	      	</TouchableHighlight>
	      </View>

	    );
	  }

}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(ActionCreators, dispatch)
}

const mapStateToProps = (state) => {
  	return {
  		num : state.num
  	}
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
