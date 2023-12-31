import { View, StyleSheet } from "react-native";
const AppItemSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgrey",
  },
});

export default AppItemSeparator;
