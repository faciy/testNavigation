import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Feed = () => {

const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <Text style={styles.title}>
        Navigation Drawer
      </Text>
      <Button
              title='Go to Feed Item'
              onPress={() => navigation.navigate('Detail')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 36,
    marginBottom: 16
  },
  androidButtonText: {
    color: 'blue',
    fontSize: 20
  }
});

export default Feed;