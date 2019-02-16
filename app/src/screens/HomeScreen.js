import React, {Component} from 'react';
import { Text, View } from 'react-native';

import axios from 'axios';

export default class HomeScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			data: {},
		};
	}

	componentDidMount() {
		axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=10&offset=0&query=cheeseburger', {
			headers: {
				'X-RapidAPI-Key' : "fce84bdd65msh9340789ab474c49p170d1ajsn3b7244498eac",
			}
		})
		.then((res) => {
			this.setState({ data: res.data });
		});
  }

	render() {
		return(
			<View>
				{this.state.data.results && this.state.data.results.map((item, idx) => (
						<Text key={idx}>{item.title}</Text>
				))}
			</View>
		);
	}
}