import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const LoginTab = height / 1.8;

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logic untuk proses login
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('HomeScreen');
  };

  return (
    <>
      <ImageBackground
        source={require('../assets/img/bg1.png')}
        style={styles.container1}
      >
        <Image
          style={styles.icon}
          source={require('../assets/icons/pusakalogo.png')}
        ></Image>
      </ImageBackground>

      <View style={styles.container2}>
        <Text style={styles.title}>LOGIN</Text>
        <Text style={styles.subtitle}>Masuk ke Mini Pusaka Apps</Text>

        {/* form input */}
        <View style={styles.FormContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <View style={styles.containerCheck}>
            <View style={styles.radioButtonContainer}>
              <TouchableOpacity onPress={() => {}} style={styles.radioButton}>
                <View style={styles.radioButtonIcon} />
              </TouchableOpacity>
              <Text style={styles.radioButtonText}>Ingat Saya</Text>
            </View>

            <Text style={styles.radioButtonText}>Lupa Password?</Text>
          </View>
          <TouchableOpacity
            title="Login"
            onPress={handleLogin}
            style={styles.buttonLogin}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>

          <View style={styles.Footer}>
            <Text style={styles.subtitleFooter}>Copyright@Diktis2023</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
    zIndex: 0,
    width: '100%',
  },
  container2: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: '10%',
    paddingTop: '10%',
    backgroundColor: '#0ADBBB',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: 'absolute',
    width: '100%',
    height: '60%',
    bottom: 0,
    zIndex: 1,
  },
  containerCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  icon: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'regular',
    marginBottom: 20,
    // marginTop:5,
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 5,
  },
  subtitleFooter: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 5,
    alignSelf: 'center',
  },
  FormContainer: {
    marginTop: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 45,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: '#98CFB6',
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 10,
    marginVertical:15,
  },
  buttonLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: 'yellow',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    // marginBottom: 20,
  },
  Footer: {
    // position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    marginTop:30,
    width: '100%',
    // backgroundColor: 'red',
  },
  input: {
    height: 56,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    color: 'black',
    marginVertical: 5,
  },
});

export default LoginScreen;
