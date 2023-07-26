import { StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import { AppIcon } from "../components/common";

interface Props {
  onPress: () => void;
}

const AddProductBtn = ({ onPress }: Props) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={colors.light}
      onPress={onPress}
      style={styles.container}
    >
      <AppIcon name="plus-circle" size={40} color={colors.white} />
    </TouchableHighlight>
  );
};
export default AddProductBtn;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 80,
    height: 80,
    borderRadius: 40,
    bottom: 20,
    borderColor: colors.white,
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
