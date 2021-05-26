import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FriendsContext } from './FriendsContext';

class Navigation1 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>You have { this.context.currentFriends.length } friends.</Text>

                <Button
                    title="Add some friends"
                    onPress={() =>
                        this.props.navigation.navigate('Friends')
                    }
                />
            </View>
        );
    }
}
Navigation1.contextType = FriendsContext;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Navigation1;
