import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Counter from '../../components/Counter';
import Profile from '../../components/Profile';

export default function App() {
  // State untuk angka counter
  const [count, setCount] = useState(0);

  // State untuk menangkap ketikan di TextInput
  const [inputText, setInputText] = useState('');

  // State untuk data final yang akan dikirim ke Profile
  const [displayName, setDisplayName] = useState('Anonymous');
  const [displayAge, setDisplayAge] = useState(0);

  // Fungsi untuk tombol di Counter
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Fungsi saat tombol PASS VALUE ditekan [cite: 342]
  const handlePassValue = () => {
    // Jika input kosong, kembalikan ke Anonymous [cite: 343]
    if (inputText.trim() === '') {
      setDisplayName('Anonymous');
    } else {
      setDisplayName(inputText);
    }
    setDisplayAge(count);
  };

  return (
    <View style={styles.container}>
      <Profile name={displayName} age={displayAge} />
      
      <Counter 
        value={count} 
        handleIncrement={handleIncrement} 
        handleDecrement={handleDecrement}
        handlePassValue={handlePassValue}
      />

      <TextInput
        style={styles.input}
        placeholder="Input your name here"
        value={inputText}
        onChangeText={setInputText}
      />
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
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20,
    width: 200,
  },
});