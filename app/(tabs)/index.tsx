import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
// Import 3 komponen simpel dari React Native Paper
import { Card, Avatar, Button } from "react-native-paper"; 
import styles from "./AppStyles";
import userData from "./data.json";

export default function App() {
  return (
    <>
      <Stack.Screen options={{ title: "User List" }} />
      
      <ScrollView style={{ marginTop: 10 }}>
        {userData.map((users, index) => (
          <View style={styles.container} key={index}>

            <Card style={{ width: 325, backgroundColor: 'white' }}>
              <Card.Title
                title={users.name}
                titleStyle={styles.boldText}
                subtitle={users.email}
                left={(props) => <Avatar.Image {...props} size={50} source={{ uri: users.photo_url }} />}
              />
              
              <Card.Actions>
                <Button mode="contained" onPress={() => {}}>Lihat Profil</Button>
              </Card.Actions>
            </Card>

          </View>
        ))}
      </ScrollView>
    </>
  );
}