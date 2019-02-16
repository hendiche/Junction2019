import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "asd state",
		};
	}

	render() {
		return(
			<View>
				<Text>{this.state.name}</Text>
			</View>
		);
	}
}