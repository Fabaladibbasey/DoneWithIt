import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import AppButton from "../components/common/AppButton";
import colors from "../config/colors";

interface props {
  navigation: any;
}

export default function WelcomeScreen({ navigation }: props) {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/images/background.jpg")}
    >
      <View>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo-red.png")}
        />
        <Text style={styles.tagline}>sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          color={colors.primary}
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          color={colors.secondary}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    flex: 1,
    resizeMode: "contain",
    justifyContent: "space-between",
    opacity: 0.8,
  },
  buttonContainer: {
    padding: 20,
    justifyContent: "space-between",
    flexBasis: 180,
  },
  logoContainer: {},
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 100,
  },
  tagline: {
    fontWeight: "600",
    paddingVertical: 20,
    textAlign: "center",
    fontSize: 30,
    color: "dodgerblue",
    textTransform: "capitalize",
    alignSelf: "center",
    marginTop: 20,
  },
});
