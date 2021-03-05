import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

import { useNavigation } from '@react-navigation/native';


const Detail = () => {

const navigation = useNavigation();

    return (
        <View style={styles.center}>
            <Text style={styles.title}>
                Navigation Drawer
            </Text>
            <Button
                    title='View Bottom Tabs'
                    onPress={() => navigation.navigate('Bottom Tab')}
            />
            <Button
                    title='View Top Tabs'
                    onPress={() => navigation.navigate('Top Tab')}
            />
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
    androidButtonText: {
      color: 'blue',
      fontSize: 20
    }
  });
  

export default Detail;
