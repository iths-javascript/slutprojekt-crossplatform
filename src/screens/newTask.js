//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskForm from '../components/taskForm'

export default function NewTask(props) {    

  return (
    <View style={styles.container}>
      <Text>New Task!</Text>
     
      <TaskForm/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});