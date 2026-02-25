import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

interface iCounter {
  handleIncrement: () => void;
  handleDecrement: () => void;
  handlePassValue: () => void; 
  value: number;
}

const Counter = ({
  handleIncrement,
  handleDecrement,
  handlePassValue,
  value
}: iCounter) => {
  return (
    <View style={styles.container}>
      <Text style={styles.valueText}>{value}</Text>
      
      <View style={styles.buttonWrapper}>
        <Button title="INCREMENT" onPress={handleIncrement} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="DECREMENT" onPress={handleDecrement} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="PASS VALUE" onPress={handlePassValue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  valueText: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonWrapper: {
    marginVertical: 5,
    width: 200, 
  }
});

export default Counter;