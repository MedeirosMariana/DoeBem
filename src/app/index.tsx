import { Button, StyleSheet, Text, View } from "react-native"
import { useDonationStore } from "@/storage/zustand/DonationStore"
import { getItemObject } from "@/storage/persistStorage/MMKVStore"
import { MMKStorageKeys } from "@/storage/persistStorage/MMKVStore/enums"

export default function Page() {
  const { donations, setToDonationByKeyAction, setToDonationAction } = useDonationStore()

  console.log('DOAÇÕES:', donations)
  console.log('DOAÇÕES MMK:', getItemObject(MMKStorageKeys.Donation))

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Button title="Mariana" onPress={() => setToDonationByKeyAction('6246E98C-5C2F-4D12-83BD-95E10C1371D7', 'title')('Mariana Medeiros - FUncionou')} />
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first Mariana of your app.</Text>
        {/* <div>{data[0]?.title ?? ''}</div> */}
        {/* <Text style={styles.subtitle}>{data.userProfiles?.toString() || 'MARIANA'}</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
