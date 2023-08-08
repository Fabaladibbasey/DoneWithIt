import AnimatedLottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";

interface Props {
  visible: boolean;
}

const AppActivityIndicator = ({ visible }: Props) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <AnimatedLottieView
        source={require("../../../assets/animations/loader.json")}
        autoPlay
        loop
      />
    </View>
  );
};
export default AppActivityIndicator;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: colors.white,
    opacity: 0.8,
    zIndex: 1,
  },
});
