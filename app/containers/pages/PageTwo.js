import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

export default class PageTwo extends Component {

	constructor(props) {
	  super(props)
	}

  	render() {
	   return (
	      <View>
	      	<Text style={{marginTop:20}}>
	      		Page Two
	      	</Text>
	      </View>

	    )
	  }

}