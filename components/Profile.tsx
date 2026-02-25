import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ProfileProps {
  name: string;
  age: number;
}

const Profile = ({ name, age }: ProfileProps) => {
  return (
    <View style={styles.container}>
      {/* Akan menampilkan Anonymous & 0 secara default [cite: 343] */}
      <Text>Halo nama ku, {name}!</Text>
      <Text>Umur ku, {age} tahun</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  }
});

export default Profile;