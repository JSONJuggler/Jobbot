import React from 'react';
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
// import {SearchScreenProps} from '../App';
import globalStyles, {COLORS} from '../styles';

const SearchScreen = () => {
  return (
    <SafeAreaView style={[globalStyles.safeArea, styles.safeArea]}>
      <View style={styles.container}>
        <Text style={styles.text}>This is the Search Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  text: {
    color: COLORS.black,
  },
  safeArea: {
    backgroundColor: COLORS.main,
  },
});

export default SearchScreen;
