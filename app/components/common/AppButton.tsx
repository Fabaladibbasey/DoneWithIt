import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  color: string;
  title: string;
  onPress?: () => void;
}

function AppButton({ color, title, onPress }: Props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        borderColor: color,
        ...styles.buttonStyle,
      }}
      onPress={onPress}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: "100%",
    borderRadius: 25,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    opacity: 1,
  },

  textStyle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
});

export default AppButton;
