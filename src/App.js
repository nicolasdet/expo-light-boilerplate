import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import NewsDisplay from './components/NewsDisplay/NewsDisplay';
import HeaderBar from './components/HeaderBar/HeaderBar';
import NewsContextProvider from './store/news-context';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NewsContextProvider>
        <HeaderBar />
        <NewsDisplay />
      </NewsContextProvider>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  logo: {
    height: '10vh',
    width: '100vw',
  },
  image: {
    height: '40vw',
  },
  title: {
    fontSize: 'calc(10px + 1vh)',
    color: 'black',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
