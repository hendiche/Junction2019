import React, {Component, PropTypes} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Image, Icon  } from 'react-native-elements';

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
        <View style={styles.header}>
          <Image
            source={ require('../../assets/images/saifood.png' )}
            style={{ width: 70, height: 70 }}
          />
        </View>
        <View style={styles.menu_container}>
          <Icon
            raised
            name='search'
            type='font-awesome'
            color='#f50'
            onPress={() => this.props.navigation.navigate('Result')}
          />
				
         <Icon
            raised
            name='upload'
            type='font-awesome'
            color='#f50'
            onPress={() => console.log('hello')}
          />
        </View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FECB6E',
    height:80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menu_container:{
    width:'90%',
    alignSelf:'center',
  }
});