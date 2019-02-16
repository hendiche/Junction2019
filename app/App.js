import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { RootStack, StackOptions } from "./src/routes";

type Props = {};
class App extends Component<Props> {
  render() {
    return <AppContainer />
  }
}

const AppContainer = createStackNavigator(RootStack, StackOptions);

export default createAppContainer(AppContainer);
