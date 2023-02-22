/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Pressable onPress={() => {}} style={styles.btnStyle}>
          <Text style={styles.textStyle}>Display Notification</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'lightgrey',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;
