import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Pressable } from "react-native";

const Home = (props) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  return (
    <View style={styles.container}>
      <Image source={require("../img/1.png")} style={styles.img} />
      <Text style={styles.title}>Maxx Scouter</Text>
      <Text style={styles.detail}>
        With an updated motor, and integrated anti-theft texh the maxx scouters
        are custom-tuned for the ultimate riding experience.
      </Text>
      <Pressable
        style={styles.btn}
        onPress={() => props.navigation.navigate("Detail")}
      >
        <Text style={styles.text}>Next</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  img: {
    height: "50%",
    width: "120%",
    resizeMode: "contain",
  },
  title: {
    color: "#ffffff",
    fontFamily: "Montserrat_700Bold",
    fontSize: 30,
    marginTop: 20,
  },
  detail: {
    color: "#ffffff",
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 20,
  },
  btn: {
    marginTop: 80,
    backgroundColor: "#e24438",
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 20,
  },
  text: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 30,
    color: "#FFF",
  },
});
