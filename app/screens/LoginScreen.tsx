import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles, {COLORS} from '../styles/styles';

type props = {
  login: () => void;
};

const LoginScreen = ({login}: props) => {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={login} style={globalStyles.button}>
          <Text style={globalStyles.text}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default LoginScreen;
