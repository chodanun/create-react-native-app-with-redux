import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../actions'
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

export class PageOne extends Component {

	constructor(props) {
	  super(props)
	  //  this.state = {
	  // 	num:0,
	  // }
	}

  	render() {
	   return (
	      <View>
	      	<Text style={{marginTop:20}}>
	      		Count (redux-test): {this.props.num}
	      	</Text>
	      	<TouchableHighlight onPress={()=> this.props.add() } >
		      	<Text>
		      		Add
		      	</Text>
	      	</TouchableHighlight>
	      	<TouchableHighlight onPress={()=> Actions.two() } >
		      	<Text>
		      		Go to pageTwo (react-native-router-flux-test)
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

export default connect(mapStateToProps, mapDispatchToProps)(PageOne);
