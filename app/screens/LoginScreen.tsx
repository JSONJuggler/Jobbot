import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import globalStyles, {COLORS} from '../styles';

type LoginScreenProps = {};

type FormData = {
  email: string;
  password: string;
};

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const {control, handleSubmit, errors} = useForm<FormData>({
    defaultValues: {email: '', password: ''},
  });

  const onSubmit = ({email, password}: FormData) => {
    console.log(email, password);
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[globalStyles.text, styles.titleText]}>Jobbie</Text>
          <Text style={[globalStyles.text, styles.subText]}>
            find your next gig
          </Text>
        </View>

        <Text style={[globalStyles.text, styles.subText]}>Email/Username</Text>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={globalStyles.textInput}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Email/Username"
            />
          )}
          name="email"
          rules={{required: true}}
        />
        {errors.email && (
          <Text style={styles.errorText}>Email is required.</Text>
        )}

        <Text style={[globalStyles.text, styles.subText]}>Password</Text>
        <Controller
          control={control}
          render={({onChange, value}) => (
            <TextInput
              style={globalStyles.textInput}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Password"
            />
          )}
          name="password"
          rules={{required: true}}
        />
        {errors.password && (
          <Text style={styles.errorText}>Password is required.</Text>
        )}

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <Text style={[globalStyles.text, styles.subText]}>
          Need an account? Sign up!
        </Text>
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
  errorText: {
    color: COLORS.error,
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
