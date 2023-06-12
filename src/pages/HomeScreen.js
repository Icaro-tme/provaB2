import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // write a code with a card, with two options, to sign up or to login
  return (
    <View style={styles.flex}>
      <View style={styles.container}>
        <Text style={styles.header}>Home</Text>
        <Text style={styles.label}>Bem Vindo!</Text>
        <View style={styles.buttonContainer}>
          <Button title="Entrar com Login" onPress={() => navigation.navigate('Login')} />
          <Button title="Cadastre-se" onPress={() => navigation.navigate('SignUp')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex:{
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    margin:15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  label: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
});


export default HomeScreen;


