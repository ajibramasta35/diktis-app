import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WebViewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplikasi Diktis akan ditampilkan disini</Text>
      <Text>Aplikasi Diktis akan ditampilkan disini</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default WebViewScreen;