//import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import { MyContext } from '../storage/context'


export default function LoginForm(props) {

  const [username, setUsername] = useState('Tuffaste Admin')
  const [password, setPassword] = useState('makrill')

  const {logIn } = useContext(MyContext)

  const signIn = async () => {
    Keyboard.dismiss()
    //console.log(username)
    //console.log(password)
    // setUsername('')
    // setPassword('')
    const auth = await logIn(username, password)
    console.log('login'+ auth)

    if(auth == 200){
      props.navigation.navigate('Home')
    }else{
      console.log('du får inte')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="username"
        style={styles.inputField}
        value={username}
        onChangeText={newText => setUsername(newText)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="password"
        style={styles.inputField}
        value={password}
        onChangeText={newText => setPassword(newText)}
      />
      <Pressable
        style={styles.button}
        onPress={signIn}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    backgroundColor: 'floralwhite',
    color: 'black',
    padding: 10,
    paddingHorizontal: 20,
    width: 300,
    fontSize: 20,
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
  button: {
    backgroundColor: '#4e9ac7',
    color: 'white',
    padding: 10,
    paddingHorizontal: 35,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});