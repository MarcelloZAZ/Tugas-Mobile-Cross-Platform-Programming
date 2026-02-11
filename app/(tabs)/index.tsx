import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // Menggunakan ScrollView agar bisa digulir ke bawah jika konten banyak [cite: 211]
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        
     
        <Text style={styles.title}>Daftar Teman & Profil</Text>

        <View style={styles.card}>
          
          <Image source={require('../../assets/images/react-logo.png')} style={styles.profileImage} />
          <Text style={styles.name}>Marcello Zefanya A. Z.</Text>
          <Text style={styles.nim}>00000089382 </Text>
          <Text style={styles.bio}>Mahasiswa Informatika UMN</Text>
        </View>

        <View style={styles.card}>
          <Image source={require('../../assets/images/icon.png')} style={styles.profileImage} />
          <Text style={styles.name}>Reynard Geovani Gozali</Text>
          <Text style={styles.nim}>00000123456</Text>
          <Text style={styles.bio}>Mahasiswa Informatika UMN</Text>
        </View>


        <View style={styles.card}>
          <Image source={require('../../assets/images/icon.png')} style={styles.profileImage} />
          <Text style={styles.name}>Jermy pohar</Text>
          <Text style={styles.nim}>00000987654</Text>
          <Text style={styles.bio}>Mahasiswa Informatika UMN</Text>
        </View>


        <View style={styles.card}>
          <Image source={require('../../assets/images/icon.png')} style={styles.profileImage} />
          <Text style={styles.name}>Nadya wulandari</Text>
          <Text style={styles.nim}>0000088996</Text>
          <Text style={styles.bio}>Mahasiswa Informatika UMN</Text>
        </View>

      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 50,
    backgroundColor: '#f0f0f0', 
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15, 
    marginBottom: 20, 
    alignItems: 'center', 
    width: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  nim: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  bio: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  }
});