//Yertugan Toguzbayev 20MD0236
import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FriendsContext } from './FriendsContext';
import Navigation1 from './Navigation1';
import Navigation2 from './Navigation2';


const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleFriends: [
        'Alice',
        'Bob',
        'Sammy',
      ],
      currentFriends: [],
    }
  }

  addFriend = (index) => {
    const {
      currentFriends,
      possibleFriends,
    } = this.state

    // Pull friend out of possibleFriends
    const addedFriend = possibleFriends.splice(index, 1)

    // And put friend in currentFriends
    currentFriends.push(addedFriend)

    // Finally, update the app state
    this.setState({
      currentFriends,
      possibleFriends,
    })
  }

  render() {
    return (
        <FriendsContext.Provider
            value={
              {
                currentFriends: this.state.currentFriends,
                possibleFriends: this.state.possibleFriends,
                addFriend: this.addFriend
              }
            }
        >
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={Navigation1}
              />
              <Stack.Screen
                  name="Friends"
                  component={Navigation2}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </FriendsContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => setData(json.movies))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  }, []);

  return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Text>{item.title}, {item.releaseYear}</Text>
                )}
            />
        )}
      </View>
  );
};
