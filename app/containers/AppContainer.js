import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Routers from './routers'

export default class AppContainer extends Component {
  	render() {
  		return (
  			<Routers/>
  		)
	  }

}