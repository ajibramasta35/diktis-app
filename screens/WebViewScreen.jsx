import React, { useRef, useEffect } from 'react';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { ScrollView, View, Text, StyleSheet, RefreshControl, } from 'react-native';

const WebViewScreen = () => {
  const navigation = useNavigation();
  const scrollRef = useRef(null);

  useScrollToTop(scrollRef);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      navigation.setOptions({ headerShown: true });
    });

    return unsubscribe;
  }, [navigation]);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY > 0) {
      navigation.setOptions({ headerShown: false });
    } else {
      navigation.setOptions({ headerShown: true });
    }
  };

    // scroll on refresh
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 300);
    }, []);

  return (
    <ScrollView
      style={styles.containerscroll}
      ref={scrollRef}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          Aplikasi Diktis akan ditampilkan disini
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerscroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0ADBBB',
    minHeight: 1000,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white',
    textAlign:'center'
  },
});

export default WebViewScreen;
