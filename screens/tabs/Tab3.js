import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Tab3 = () => {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Tab Three</Text>
        </View>
    )
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
  });
  

export default Tab3;
