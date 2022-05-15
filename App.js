// @flow
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Pressable,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import Home from './screens/HomeScreen';
import Auth from './screens/AuthScreen';

export default function App() {
  const [auth, setAuth] = useState(false);

  const memoizedOptions = useMemo(() => {
    return {
      cancelLabel: 'Cancel Login',
      promptMessage: 'Verify yourself',
    };
  }, []);

  const login = useCallback(async options => {
    LocalAuthentication.authenticateAsync(options)
      .then(response => {
        Object.keys(response).forEach(key => {
          if (response.success) {
            setAuth(true);
          } else {
            setAuth(false);
            Alert.alert('Please try again!');
          }
        });
      })
      .catch(error => console.error('Error: ', error));

    return '';
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        {auth ? <Home /> : <Auth onLogin={() => login(memoizedOptions)} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
  },
});
