import { Text, TextInput, View } from "react-native";

interface CustomProps {
  onChange: (val: string) => void;
  input: string;
}

// Komponen Input Nama
export const CustomTextInput = ({ input, onChange }: CustomProps) => {
  console.log(input);
  return (
    <View style={{ width: 200, marginBottom: 10 }}>
      <Text>Name</Text>
      <TextInput
        placeholder="Input your name"
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 10,
          borderRadius: 8
        }}
        onChangeText={onChange}
        value={input}
      />
    </View>
  );
};

// Komponen Input NIM
export const NIMInput = ({ input, onChange }: CustomProps) => {
  console.log(input);
  return (
    <View style={{ width: 200 }}>
      <Text>NIM</Text>
      <TextInput
        placeholder="Input your NIM/Student ID"
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 10,
          borderRadius: 8
        }}
        onChangeText={onChange}
        keyboardType="numeric"
        value={input}
      />
    </View>
  );
};