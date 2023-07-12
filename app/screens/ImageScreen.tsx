import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
const ImageScreen = () => {
  return (
    <View style={styles.imgViewContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <MaterialCommunityIcons
          name="close"
          size={34}
          color={colors.white}
          style={styles.icon}
        />
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={34}
          color={colors.white}
          style={styles.icon}
        />
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/images/chair.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgViewContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
  },

  image: {
    width: "100%",
    height: 600,
    resizeMode: "contain",
    marginBottom: 80,
  },
  icon: {
    padding: 14,
  },
});
export default ImageScreen;
