import React, {Component} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Image, Icon, Card, Button, ListItem } from 'react-native-elements';

export default class ResultScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "asd state",
    };

    
  }

  render() {
    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
    ]

    const recipes = [
      {
        title:'Fried Calamari',
        image:'../../assets/images/saifood.png',
        description:'The idea with React Native Elements is more about component structure than actual design.'
      },
      {
        title:'Fried Calamari',
        image:'../../assets/images/saifood.png',
        description:'The idea with React Native Elements is more about component structure than actual design.'
      }
    ]

    return(
      <View>
      <Text style={styles.subtitle}>Ingredients</Text>
       {
          list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
            />
          ))
        }
        <Text style={styles.subtitle}>Related Food</Text>
        <Card
          title='HELLO WORLD'
          image={require('../../assets/images/saifood.png')}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={<Icon name='view' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subtitle: {
    fontWeight:'bold',
    fontSize:20,
    color:"#FECB6E",
    left:13,
  },
});