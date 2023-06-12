import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';
import TradeCard from '../components/TradeCard';

const DashBoardScreen = ({ navigation }) => {
  const weapons = [
    { key:1, title: 'Axe', att: 10, def: 2, wt: 7 },
    { key:2, title: 'Sword', att: 8, def: 4, wt: 5 },
    { key:3, title: 'Bow', att: 6, def: 1, wt: 3 }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>LIPSUM.PLEX</Text>
      <View style={styles.scrollContainer}>
        <ScrollView 
          style={styles.scroll}
          horizontal={true}
          contentContainerStyle={styles.content}
        >
          {weapons.map((weapon, index) => (
            <TradeCard key={index} weapon={weapon} />
          ))}
        </ScrollView>
      </View>
      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  scrollContainer: {
    flex: 1,
    height: '70%', // Adjust the height as needed
    width: '100%',
  },
  scroll: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default DashBoardScreen;
