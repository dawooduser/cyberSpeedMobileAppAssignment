import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import store, { persistor } from './src/redux/reduxStore/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { LazyLoader } from './src/components';
import Toast from 'react-native-toast-message';
import StackNavigation from './src/navigation/StackNavigation';


const App = () => {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StackNavigation />
      <LazyLoader />
      <Toast />
    </PersistGate>
  </Provider>
}

export default App

const styles = StyleSheet.create({})