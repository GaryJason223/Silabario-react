import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.titleText}>SILABARIO</Text>
      <Text style={styles.subtitleText}>Hispanoamericano</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.startButton} onPress={() => Alert.alert('quiondas jason!?')}>
        <Text style={styles.startText}>Iniciar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9bf5f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 30,
    margin: 30,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4a3d88',
  },
  subtitleText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  startButton: {
    backgroundColor: '#005bda',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center'
  },
  startText: {
    color: 'white'
  }
});