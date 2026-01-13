import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <HeroSection />
        <Features />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
