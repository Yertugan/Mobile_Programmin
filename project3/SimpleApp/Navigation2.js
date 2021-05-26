import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FriendsContext } from './FriendsContext';

class Navigation2 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Add friends here!</Text>

                {
                    this.context.possibleFriends.map((friend, index) => (
                        <Button
                            key={ friend }
                            title={ `Add ${ friend }` }
                            onPress={() =>
                                this.context.addFriend(index)
                            }
                        />
                    ))
                }

                <Button
                    title="Back to home"
                    onPress={() =>
                        this.props.navigation.navigate('Home')
                    }
                />
            </View>
        );
    }
}
Navigation2.contextType = FriendsContext;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Navigation2;
