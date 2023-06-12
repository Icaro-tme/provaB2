import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  
    return (
      <View style={styles.container}>
        <Text> AAAAAAAAAAAAAA </Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 20,
    },
  });
  
  export default ForgotPasswordScreen;
  