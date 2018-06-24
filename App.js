/**
 * App component 
 * @author ritesh.patel
 * prepares nuts and bolts for the app
 */
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index'
import TriviaHome from './components/TriviaHome';
import TriviaQuestions from './components/TriviaQuestions';
import TriviaResults from './components/TriviaResults';

const store = createStore(reducers);

const TriviaApp = createStackNavigator({
  Home: {
    screen: TriviaHome
  },
  Questions: {
    screen: TriviaQuestions
  },
  Results: {
    screen: TriviaResults
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TriviaApp />
      </Provider>
    );
  }
}
