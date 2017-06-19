import React, { Component, PropTypes } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
// import PageOne from './pages/pageOne'
// import PageTwo from './pages/pageTwo'
import { PageOne , PageTwo} from './pages'

const Routers = () => {
	return (
		<Router>
			<Scene key="main">
				<Scene key="one" component={PageOne} title="Page One" hideNavBar />
				<Scene key="two" component={PageTwo} title="Page Two" hideNavBar = {false}/>
			</Scene>
		</Router>
	)
}

export default Routers