import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component {

    updateSearch = (search) => {
        this.setState({ search });
      };

    render(){
    return(
        <View style={styles.container}>
            <Text>Read Story</Text>
        </View>
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
