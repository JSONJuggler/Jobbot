import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles, {COLORS} from '../styles';

type props = {
  login: () => void;
};

const LoginScreen = ({login}: props) => {
  const [value, onChangeText] = useState('');

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[globalStyles.text, styles.titleText]}>Jobbie</Text>
          <Text style={[globalStyles.text, styles.subText]}>
            find your next gig
          </Text>
        </View>

        <TextInput
          style={globalStyles.textInput}
          onChangeText={(text: string) => onChangeText(text)}
          value={value}
          placeholder="Email"
        />
        <TextInput
          style={globalStyles.textInput}
          onChangeText={(text: string) => onChangeText(text)}
          value={value}
          placeholder="Password"
        />

        <TouchableOpacity onPress={login} style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Log in</Text>
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
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 'auto',
    display: 'flex',
  },
  titleContainer: {
    flex: 0.5,
  },
  titleText: {
    fontSize: 80,
    fontWeight: 'bold',
  },
  subText: {
    color: COLORS.caption,
    paddingLeft: 10,
  },
});

export default LoginScreen;
