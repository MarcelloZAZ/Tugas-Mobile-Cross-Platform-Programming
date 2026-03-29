import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomTextInput, NIMInput } from "./input";

export default function Index() {
  // Membuat state untuk menyimpan nama dan nim
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");

  const handleChangeMyName = (value: string) => {
    setName(value);
  }

  const handleChangeMyNim = (value: string) => {
    setNim(value);
  }

  return (
    <View style={styles.container}>
      {/* Menampilkan teks yang akan berubah sesuai ketikan */}
      <Text style={{ fontSize: 18, marginBottom: 20, fontWeight: "bold" }}>
        {name || "Nama"} - {nim || "NIM"}
      </Text>

      {/* Memanggil input field */}
      <CustomTextInput input={name} onChange={handleChangeMyName} />
      <NIMInput input={nim} onChange={handleChangeMyNim} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8
  }
});